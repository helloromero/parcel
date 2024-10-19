import FetchDataSteps from "@/components/tutorial/fetch-data-steps";
import { createClient } from "@/utils/supabase/server";
import { InfoIcon } from "lucide-react";
import { redirect } from "next/navigation";
import Sidenav from "../../components/parcel/Sidenav";

export default async function ProtectedPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  return (
    <div className="min-w-full">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[300px_1fr] lg:gap-8">
        <Sidenav />
        <div className="">
          <div className="relative  border border-gray-100 gap-12 ">
            <label htmlFor="Search" className="sr-only">
              Search
            </label>

            <input
              type="text"
              id="Search"
              placeholder="Search ya bookmarks..."
              className="flex h-10 w-full  border border-input bg-background px-3 py-2 text-sm"
            />

            <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
              <button
                type="button"
                className="text-gray-600 hover:text-gray-700"
              >
                <span className="sr-only">Search</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </button>
            </span>
          </div>
          {Array.from({ length: 100 }).map((_, index) => (
            <a
              href="#"
              className="relative block overflow-hidden  border border-gray-100 w-full p-6 mt-6"
            >
              <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

              <div className="sm:flex sm:justify-between sm:gap-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                    Expo
                  </h3>
                </div>

                <div className="hidden sm:block sm:shrink-0">
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                    className="size-10 rounded-lg object-cover shadow-sm"
                  />
                </div>
              </div>

              <div className="mt-4">
                <p className="text-pretty text-sm text-gray-500">
                  Expo is an open-source platform for making universal native
                  apps for Android, iOS, and the web with JavaScript and
                  React.Expo is an open-source platform for making universal
                  native apps for Android, iOS, and the web with JavaScript and
                  React.Expo is an open-source platform for making universal
                  native apps for Android, iOS, and the web with JavaScript and
                  React.
                </p>
              </div>

              <dl className="mt-6 flex gap-4 sm:gap-6">
                <div className="flex flex-col-reverse">
                  <dt className="text-sm font-medium text-gray-600"></dt>
                  <dd className="text-xs text-gray-500">31st June, 2021</dd>
                </div>
              </dl>
              <dl className="mt-6 flex gap-4 sm:gap-6">
                <div className="flex gap-4">
                  <dt className="text-sm font-medium text-gray-600">
                    <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                      for_crony
                    </span>
                  </dt>
                  <dt className="text-sm font-medium text-gray-600">
                    <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                      ideas
                    </span>
                  </dt>
                  <dt className="text-sm font-medium text-gray-600">
                    <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                      design_inspo
                    </span>
                  </dt>
                </div>
              </dl>
            </a>
          ))}
        </div>
      </div>
      {/* <div className="flex flex-col gap-2 items-start">
        <h2 className="font-bold text-2xl mb-4">Your user details</h2>
        <pre className="text-xs font-mono p-3 rounded border max-h-32 overflow-auto w-100">
          {JSON.stringify(user, null, 2)}
        </pre>
      </div> */}
    </div>
  );
}
