import {
  ArrowPathIcon,
  Bars3Icon,
  BookmarkSquareIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  LifebuoyIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  XMarkIcon,
  RectangleGroupIcon,
  ChartPieIcon,
  PresentationChartBarIcon,
  CalculatorIcon,
  BanknotesIcon,
  ListBulletIcon,
  ShoppingCartIcon,
  ChatBubbleLeftRightIcon,

} from '@heroicons/react/24/outline'

const features = [
  {
    name: 'GPA Calculator',
    description: 'A GPA calculater embed inside of the grades.',
    href: '/dashboard/gpa',
    icon: CalculatorIcon,
  },
  { name: 'Grader', 
    description: "The grader shows you a hyper accurate grade breakdown for each class. It shows also shows you a visualization of your grades", 
    href: '/dashboard/grader', 
    icon: RectangleGroupIcon },
  {
    name: 'Radar scale',
    description: "The radar scale will show you what you are good at and your strengths and weaknesses.",
    href: '/dashboard/radar',
    icon: ChartPieIcon,
  },
  {
    name: 'Overall grade',
    description: 'Shows you all your grades at a glace. Simply.',
    href: '/dashboard/overall-grade',
    icon: ListBulletIcon,
  },
  {
    name: 'Homework Help',
    description: 'We use an AI Api to come up with useful answers for all questions. It will be able to be used an unlimited amount of times.',
    href: '/dashboard/homework-help',
    icon: ChatBubbleLeftRightIcon,
  },
]
export default function Page() {
  return (
    <main>
      <div className="relative px-6 lg:px-8">
        <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
          <div>
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                <span className="text-gray-600">
                  Announcing the lunch of Winston.{' '}
                  <a href="/learn-more" className="font-semibold text-indigo-600">
                    <span className="absolute inset-0" aria-hidden="true" />
                    Learn More <span aria-hidden="true">&rarr;</span>
                  </a>
                </span>
              </div>
            </div>
            <div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
                Helping <span className="decoration-indigo-600 text-indigo-600 font-black">students</span>&nbsp;become their best
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
                The team behind Winston is made for students to be affordable and functional for the everyday student wanting to advance academically.
              </p>
              <div className="mt-8 flex gap-x-4 sm:justify-center">
                <a
                  href="/dashboard"
                  className="animate-bounce inline-block rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700"
                >
                  Get started
                  <span className="text-indigo-200" aria-hidden="true">
                    &rarr;
                  </span>
                </a>
              </div>
            </div>
        </div>
      </div>
    </div>
    <div className="bg-transparent pt-12 sm:pt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Trusted by <span className="font-black text-indigo-600">students</span> globally
          </h2>
          <p className="mt-3 text-xl text-gray-500 sm:mt-4">
            Here are some stats for you.
          </p>
        </div>
      </div>
      <div className="mt-10 bg-transparent pb-12 sm:pb-16">
        <div className="relative">
          <div className="absolute inset-0 h-1/2 bg-transparent" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
                <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                  <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">Features & Counting</dt>
                  <dd className="order-1 text-5xl font-bold tracking-tight text-indigo-600">6</dd>
                </div>
                <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                  <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">Updates</dt>
                  <dd className="order-1 text-5xl font-bold tracking-tight text-indigo-600">24/7</dd>
                </div>
                <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                  <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">Design</dt>
                  <dd className="order-1 text-5xl font-bold tracking-tight text-indigo-600">Simple</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section className="overflow-hidden bg-transparent">
      <div className="relative mx-auto max-w-7xl px-4 pt-20 pb-12 sm:px-6 lg:px-8 lg:py-20">
        <svg
          className="absolute top-full left-0 translate-x-80 -translate-y-24 transform lg:hidden"
          width={784}
          height={404}
          fill="none"
          viewBox="0 0 784 404"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e56e3f81-d9c1-4b83-a3ba-0d0ac8c32f32"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={784} height={404} fill="url(#e56e3f81-d9c1-4b83-a3ba-0d0ac8c32f32)" />
        </svg>

        <svg
          className="absolute right-full top-1/2 hidden translate-x-1/2 -translate-y-1/2 transform lg:block"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="56409614-3d62-4985-9a10-7ca758a8f4f0"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={784} fill="url(#56409614-3d62-4985-9a10-7ca758a8f4f0)" />
        </svg>

        <div className="relative lg:flex lg:items-center">
          <div className="hidden lg:block lg:flex-shrink-0">
            <img
              className="h-64 w-64 rounded-full xl:h-80 xl:w-80"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </div>

          <div className="relative lg:ml-10">
            <svg
              className="absolute top-0 left-0 h-36 w-36 -translate-x-8 -translate-y-24 transform text-indigo-200 opacity-50"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 144 144"
              aria-hidden="true"
            >
              <path
                strokeWidth={2}
                d="M41.485 15C17.753 31.753 1 59.208 1 89.455c0 24.664 14.891 39.09 32.109 39.09 16.287 0 28.386-13.03 28.386-28.387 0-15.356-10.703-26.524-24.663-26.524-2.792 0-6.515.465-7.446.93 2.327-15.821 17.218-34.435 32.11-43.742L41.485 15zm80.04 0c-23.268 16.753-40.02 44.208-40.02 74.455 0 24.664 14.891 39.09 32.109 39.09 15.822 0 28.386-13.03 28.386-28.387 0-15.356-11.168-26.524-25.129-26.524-2.792 0-6.049.465-6.98.93 2.327-15.821 16.753-34.435 31.644-43.742L121.525 15z"
              />
            </svg>
            <blockquote className="relative">
              <div className="text-2xl font-medium leading-9 text-gray-900">
                <p>
                  This new service helped me greatly throughout my time at college. I would recommend this to any student who wants to get more organizied and perform better.
                </p>
              </div>
              <footer className="mt-8">
                <div className="flex">
                  <div className="flex-shrink-0 lg:hidden">
                    <img
                      className="h-12 w-12 rounded-full"
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                  <div className="ml-4 lg:ml-0">
                    <div className="text-base font-medium text-gray-900">Jane Farti</div>
                    <div className="text-base font-medium text-indigo-600">Alumni, UMD</div>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
    <div className="bg-white py-16 sm:py-24">
      <div className="relative sm:py-16">
        <div aria-hidden="true" className="hidden sm:block">
          <div className="absolute inset-y-0 left-0 w-1/2 rounded-r-3xl bg-gray-50" />
          <svg className="absolute top-8 left-1/2 -ml-3" width={404} height={392} fill="none" viewBox="0 0 404 392">
            <defs>
              <pattern
                id="8228f071-bcee-4ec8-905a-2a059a2cc4fb"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={392} fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)" />
          </svg>
        </div>
        <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="relative overflow-hidden rounded-2xl bg-indigo-600 px-6 py-10 shadow-xl sm:px-12 sm:py-20">
            <div aria-hidden="true" className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0">
              <svg
                className="absolute inset-0 h-full w-full"
                preserveAspectRatio="xMidYMid slice"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 1463 360"
              >
                <path
                  className="text-indigo-500 text-opacity-40"
                  fill="currentColor"
                  d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
                />
                <path
                  className="text-indigo-700 text-opacity-40"
                  fill="currentColor"
                  d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
                />
              </svg>
            </div>
            <div className="relative">
              <div className="sm:text-center">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Get notified when we launch more features.
                </h2>
                <p className="mx-auto mt-6 max-w-2xl text-lg text-indigo-200">
                  Heads up for educators and administrators this student suite may evolve into a simplier more powerful learning management system.
                </p>
              </div>
              <form action="#" className="mt-12 sm:mx-auto sm:flex sm:max-w-lg">
                <div className="min-w-0 flex-1">
                  <label htmlFor="cta-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="cta-email"
                    type="email"
                    className="block w-full rounded-md border border-transparent px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-3">
                  <button
                    type="submit"
                    className="block w-full rounded-md border border-transparent bg-indigo-500 px-5 py-3 text-base font-medium text-white shadow hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600 sm:px-10"
                  >
                    Notify me
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="overflow-hidden bg-white">
      <div className="relative mx-auto max-w-7xl py-24 px-6 sm:py-32 lg:px-8 lg:py-40">
        <svg
          className="absolute top-0 left-full -translate-x-1/2 -translate-y-3/4 transform lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="8b1b5f72-e944-4457-af67-0c6d15a99f38"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} className="text-gray-100" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={784} fill="url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)" />
        </svg>

        <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-12 xl:gap-x-16">
          <div className="lg:col-span-1">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">A simple way of working with grades.</h2>
          </div>
          <dl className="mt-20 grid grid-cols-1 gap-16 sm:grid-cols-2 sm:gap-x-12 lg:col-span-2 lg:mt-0">
            {features.map((feature) => (
              <div key={feature.name}>
                <dt>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white">
                    <feature.icon className="h-8 w-8" aria-hidden="true" />
                  </div>
                  <p className="mt-6 text-lg font-semibold leading-8 text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 text-base text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-12 px-4 text-center sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Ready to dive in?</span>
          <span className="block">Create a free account.</span>
        </h2>
        <div className="mt-8 flex justify-center">
          <div className="inline-flex rounded-md shadow">
            <a
              href="/sign-up"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
            >
              Get started
            </a>
          </div>
          <div className="ml-3 inline-flex">
            <a
              href="/learn-more"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-100 px-5 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  </main>
  
  );
}