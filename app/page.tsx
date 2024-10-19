import Hero from "@/components/hero";
import ConnectSupabaseSteps from "@/components/tutorial/connect-supabase-steps";
import SignUpUserSteps from "@/components/tutorial/sign-up-user-steps";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import FetchDataSteps from "@/components/tutorial/fetch-data-steps";
import { createClient } from "@/utils/supabase/server";
import { InfoIcon } from "lucide-react";
import { redirect } from "next/navigation";

export default async function Index() {
  // const supabase = createClient();

  // const {
  //   data: { user },
  // } = await supabase.auth.getUser();

  // if (!user) {
  //   return redirect("/sign-in");
  // }

  return (
    <section className="w-full">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex  lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            yeah, another bookmarking{" "}
            <span className="font-extrabold parcel-yellow">app</span>.
          </h1>

          <p className="mt-4 sm:text-xl/relaxed">
            Parcel is a fast, privacy-first bookmarking service with no ads or
            third-party tracking. Save bookmarks from any browser, and for a
            small annual fee, upgrade to premium for full-text search,
            archiving, and broken link checking. Try Parcel today to keep your
            online world organised!
          </p>

          {/* <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow focus:outline-none focus:ring parcel-yellow-bg parcel-btn"
              href="/sign-in"
            >
              Get Started
            </a>

            <a
              className="block w-full rounded px-12 py-3 text-sm font-medium text-red-600 shadow focus:outline-none focus:ring parcel-yellow parcel-yellow-border parcel-btn"
              href="/sign-in"
            >
              Login
            </a>
          </div> */}

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a className="" href="/sign-up">
              {/* <span className="absolute inset-0 translate-x-0 translate-y-0 bg-yellow-300 transition-transform group-hover:translate-x-1.5 group-hover:translate-y-1.5"></span> */}

              <span className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest">
                Get Started
              </span>
            </a>

            <a className="" href="/sign-in">
              {/* <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-yellow-300 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></span> */}

              <span className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75 parcel-yellow-bg">
                Login
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
