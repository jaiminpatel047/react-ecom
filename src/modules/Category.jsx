import { useEffect, useState } from "react";
// AI Refactor Patch: Removed unused Link import to avoid dead code and potential incompatibility with React Router v7 APIs.
import Loadrer from "../utiliy/Loadrer";

export const Category = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const controller = new AbortController(); // AI Refactor Patch: Use AbortController to avoid memory leaks if component unmounts during fetch.
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products/categories",
          { signal: controller.signal }
        ); // AI Refactor Patch: Attach signal to fetch for safe cancellation.
        if (!response.ok) throw new Error(`HTTP ${response.status}`); // AI Refactor Patch: Guard against non-OK responses to avoid setting invalid state.
        const data = await response.json(); // AI Refactor Patch: Correct variable name (data) and use consistent typing.
        console.log(data);
        setCategories(Array.isArray(data) ? data : []); // AI Refactor Patch: Ensure only arrays are set to prevent runtime errors.
      } catch (err) {
        if (err && err.name === "AbortError") return; // AI Refactor Patch: Ignore abort errors from cleanup.
        console.error("Failed to fetch categories", err); // AI Refactor Patch: Log fetch errors for debugging without crashing UI.
        setCategories([]); // AI Refactor Patch: Fallback to empty list on error.
      }
    };
    fetchCategories();
    return () => controller.abort(); // AI Refactor Patch: Cleanup fetch on unmount.
  }, []);

  // AI Refactor Patch: Removed unused second category state/effect that fetched products; it caused invalid requests and type confusion.

  if (categories.length === 0) return <Loadrer />;
  return (
    <div className="px-4 mx-auto py-4 md:py-6">
      <div className="container m-auto flex md:text-left text-center md:justify-between justify-center items-center">
        <div className="m-auto">
          <h2 className="text-3xl font-medium">Popular Categories</h2>
        </div>
      </div>
      <div className="my-10 container m-auto">
        <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
          {categories.map((cat) => (
            <div
              className="bg-gray-100 rounded-xl flex flex-col justify-center items-center p-4 md:p-6"
              key={cat} // AI Refactor Patch: Use category string itself as stable key; previous key used undefined property.
            >
              <img
                className="h-20 w-20"
                src="../image/shopping.png"
                alt={cat} // AI Refactor Patch: Alt text should reflect the category string; previous alt used undefined property.
              />
              <div className="font-bold mt-4 text-center uppercase">
                {cat || "categories"} {/* AI Refactor Patch: Render category string; previous code tried to render object properties. */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
