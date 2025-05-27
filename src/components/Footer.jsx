import React from 'react'

export default function Footer() {
  return (
    <>
      <footer className="p-6 dark:bg-gray-100 bg-black text-white shadow mt-5">
        <div className="container grid grid-cols-2 mx-auto gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-4">
          <div className="flex flex-col space-y-4">
            <h2 className="font-medium text-gray-950">About</h2>
            <div className="flex flex-col space-y-2 text-sm dark:text-gray-600">
              <a className="capitalize cursor-pointer"
                href="#">Contact As</a>
              <a className="capitalize cursor-pointer"
                href="#">Support Center </a>
              <a className="capitalize cursor-pointer"
                href="#">My Market store</a>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <h2 className='font-medium text-gray-950'>Help</h2>
            <div className="flex flex-col space-y-2 text-sm dark:text-gray-600">
              <a className="capitalize cursor-pointer"
                href="#">payment</a>
              <a className="capitalize cursor-pointer"
                href="#">shopping</a>
              <a className="capitalize cursor-pointer"
                href="#">cancel and returns</a>
              <a className="capitalize"
                href="#">faq</a>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <h2 className="font-medium text-gray-950">Customization</h2>
            <div className="flex flex-col space-y-2 text-sm dark:text-gray-600">
              <a className="capitalize"
                href="#">Configuration</a>
              <a className="capitalize"
                href="#">Theme Configuration</a>
              <a className="capitalize"
                href="#">Breakpoints</a>
              <a className="capitalize"
                href="#">Customizing Colors</a>
              <a className="capitalize"
                href="#">Customizing Spacing</a>
              <a className="capitalize"
                href="#">Configuring Variants</a>
              <a className="capitalize"
                href="#">Plugins</a>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <h2 className="font-medium text-gray-950">Community</h2>
            <div className="flex flex-col space-y-2 text-sm dark:text-gray-600">
              <a className="capitalize"
                href="#">GitHub</a>
              <a className="capitalize"
                href="#">Discord</a>
              <a className="capitalize"
                href="#">Twitter</a>
              <a className="capitalize"
                href="#">YouTube</a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center px-6 pt-12 text-sm">
          <span className="text-gray-600 font-semibold">© Copyright 2025. All Rights Reserved MY Market.</span>
        </div>
      </footer>
    </>
  )
}
