import { CubeIcon, GoogleLogoIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

const SignInPage = () => {
  return (
    <div className="flex flex-col items-center justify-end w-full p-4 h-[700px]">
      <div className="absolute flex flex-col items-center mb-6 text-white top-10">
        <CubeIcon size={80} weight="fill" />
        <p className="mt-2 text-4xl font-normal">Rekber.</p>
      </div>

      <div className="w-full max-w-sm p-6 space-y-4 bg-white rounded shadow-lg">
        <h2 className="text-3xl font-medium text-gray-800">Sign In</h2>

        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Username or Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm px-3 py-2 focus:ring-[#7b8be8] focus:border-[#7b8be8]"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm px-3 py-2 focus:ring-[#7b8be8] focus:border-[#7b8be8]"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#7b8be8] text-white py-2 rounded-md hover:bg-[#6877cf] transition"
          >
            Sign In
          </button>
        </form>

        <div className="relative my-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 text-gray-500 bg-white">or</span>
          </div>
        </div>

        <button
          type="button"
          className="flex items-center justify-center w-full gap-2 py-2 transition border border-gray-300 rounded-md hover:bg-gray-100"
        >
          <GoogleLogoIcon size={20} />
          Sign in with Google
        </button>

        <p className="text-sm text-center text-gray-600">
          Don't have an account?{" "}
          <Link href="/signup" className="text-[#7b8be8] font-medium hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignInPage;
