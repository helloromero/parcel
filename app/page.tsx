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
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
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
          </div>
        </div>
      </div>
    </section>
  );
}
