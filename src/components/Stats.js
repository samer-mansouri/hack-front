/* This example requires Tailwind CSS v2.0+ */
import { UsersIcon } from '@heroicons/react/outline'

export default function Stats() {
  return (
    <div className="relative bg-white">
      <div className="h-56 bg-[#d83d2e] sm:h-72 lg:absolute lg:left-0 lg:h-full lg:w-1/2">
        <img
          className="w-full h-full object-cover"
          src="https://i0.wp.com/www.giveindia.org/blog/wp-content/uploads/2021/02/banner-1.jpg?fit=1200%2C675&ssl=1"
          alt="Support team"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 py-8 sm:py-12 sm:px-6 lg:py-16">
        <div className="max-w-2xl mx-auto lg:max-w-none lg:mr-0 lg:ml-auto lg:w-1/2 lg:pl-10">
          <div>
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#3b82f6] text-white">
              <UsersIcon className="h-6 w-6" aria-hidden="true" />
            </div>
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Deliver what your customers want every time
          </h2>
          <p className="mt-6 text-lg text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore nihil ea rerum ipsa. Nostrum consectetur
            sequi culpa doloribus omnis, molestiae esse placeat, exercitationem magnam quod molestias quia aspernatur
            deserunt voluptatibus.
          </p>
          <div className="mt-8 overflow-hidden">
            <dl className="-mx-8 -mt-8 flex flex-wrap">
              <div className="flex flex-col px-8 pt-8">
                <dt className="order-2 text-base font-medium text-gray-500">Support</dt>
                <dd className="order-1 text-2xl font-extrabold text-[#3b82f6] sm:text-3xl">24/7</dd>
              </div>
              <div className="flex flex-col px-8 pt-8">
                <dt className="order-2 text-base font-medium text-gray-500">Fiabilité</dt>
                <dd className="order-1 text-2xl font-extrabold text-[#3b82f6] sm:text-3xl">100%</dd>
              </div>
              <div className="flex flex-col px-8 pt-8">
                <dt className="order-2 text-base font-medium text-gray-500">Utilisateurs</dt>
                <dd className="order-1 text-2xl font-extrabold text-[#3b82f6] sm:text-3xl">100k+</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}