import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";

export default function Page() {
  return (
    <main>
      <div className="bg-transparent">
        <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-lg font-semibold text-indigo-600">Contact</h2>
            <p className="mt-1 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Let us get some feedback.
            </p>
            <p className="mx-auto mt-5 max-w-xl text-xl text-gray-500">
              Your feedback is always appreciated for us to better Winston. We
              are always working to make Winston the best it can be.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-transparent">
        <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
          <div className="divide-y-2 divide-gray-200">
            <div className="lg:grid lg:grid-cols-3 lg:gap-8">
              <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">
                Get in touch
              </h2>
              <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:col-span-2 lg:mt-0">
                <div>
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    Feedback
                  </h3>
                  <dl className="mt-2 text-base text-gray-500">
                    <div>
                      <dt className="sr-only">Email</dt>
                      <dd>feedback@winston.education</dd>
                    </div>
                    <div className="mt-1">
                      <dt className="sr-only">Instagram</dt>
                      <dd>@winston.education</dd>
                    </div>
                  </dl>
                </div>
                <div>
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    Support
                  </h3>
                  <dl className="mt-2 text-base text-gray-500">
                    <div>
                      <dt className="sr-only">Email</dt>
                      <dd>support@winston.education</dd>
                    </div>
                    <div className="mt-1">
                      <dt className="sr-only">Instagram</dt>
                      <dd>@winston.education</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
            <div className="mt-16 pt-16 lg:grid lg:grid-cols-3 lg:gap-8">
              <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">
                Locations
              </h2>
              <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:col-span-2 lg:mt-0">
                <div>
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    Parkville
                  </h3>
                  <div className="mt-2 text-base text-gray-500">
                    <p>2600 Putty Hill Avenue</p>
                    <p className="mt-1">Parkville, MD 21234</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
