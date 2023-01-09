import { Component } from 'solid-js'

const Garten: Component = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 416 416"
        fill="none"
      >
        <circle cx="103" cy="103" r="78" stroke="white" stroke-width="18" />
        <rect
          x="235"
          y="235"
          width="156"
          height="156"
          stroke="white"
          stroke-width="18"
        />
        <mask id="path-3-inside-1_670_44654" fill="white">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M400 190C400 93.9025 322.098 16 226 16L226 190L400 190Z"
          />
        </mask>
        <path
          d="M226 16L226 -2.00001L208 -2.00001L208 16L226 16ZM400 190L400 208L418 208L418 190L400 190ZM226 190L208 190L208 208L226 208L226 190ZM226 34C312.156 34 382 103.844 382 190L418 190C418 83.9613 332.039 -2 226 -2.00001L226 34ZM244 190L244 16L208 16L208 190L244 190ZM400 172L226 172L226 208L400 208L400 172Z"
          fill="white"
          mask="url(#path-3-inside-1_670_44654)"
        />
        <mask id="path-5-inside-2_670_44654" fill="white">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16 226C16 322.098 93.9025 400 190 400L190 226L16 226Z"
          />
        </mask>
        <path
          d="M190 400L190 418L208 418L208 400L190 400ZM16 226L16 208L-2 208L-2 226L16 226ZM190 226L208 226L208 208L190 208L190 226ZM190 382C103.844 382 34 312.156 34 226L-2 226C-2 332.039 83.9613 418 190 418L190 382ZM172 226L172 400L208 400L208 226L172 226ZM16 244L190 244L190 208L16 208L16 244Z"
          fill="white"
          mask="url(#path-5-inside-2_670_44654)"
        />
      </svg>
    </>
  )
}

export default Garten
