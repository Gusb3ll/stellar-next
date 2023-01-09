import type { Component } from 'solid-js'
import { Link } from '@solidjs/router'

const Nav: Component = () => {
  return (
    <>
      <nav class="flex h-16 w-screen justify-center items-center">
        <div class="flex flex-row gap-12">
          <Link
            class="text-white md:text-2xl text-lg font-thin no-underline"
            href="/"
          >
            Home
          </Link>
          {/* <Link class="text-white md:text-2xl text-lg font-thin no-underline" href="/about">About</Link> */}
          <Link
            class="text-white md:text-2xl text-lg font-thin no-underline"
            href="/projects"
          >
            Projects
          </Link>
          {/* <Link class="text-white md:text-2xl text-md font-thin no-underline" href="/works">Works</Link> */}
        </div>
      </nav>
    </>
  )
}

export default Nav
