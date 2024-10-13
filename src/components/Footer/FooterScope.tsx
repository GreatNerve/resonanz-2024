"use client";

import React from "react";
import { useState, useEffect, useCallback } from "react";
interface FooterScopeProps extends React.HTMLAttributes<SVGElement> {}


export const FooterScope: React.FC<FooterScopeProps> = ({ ...props }) => {
  const spingRotate = useCallback(() => {
    let rotate = 0;
    setInterval(() => {
      rotate += 1;
      if (rotate === 360) {
        rotate = 0;
      }
    }, 1000);
  }, []);

  useEffect(() => {
    spingRotate();
  }, []);

  const [rotate, setRotate] = useState(0);
  useEffect(() => {
    setRotate(rotate);
  }, [rotate]);

  


  return (
    <svg
      viewBox="0 0 742 457"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M240.222 187.249L312.737 156.794C313.954 156.379 314.97 155.872 316.123 155.305L316.153 155.256L316.107 155.245C327.62 149.494 335.619 136.412 335.619 121.194C335.625 100.657 320.989 84 302.934 84C296.702 84 290.894 86.018 285.938 89.4687L285.922 89.4275L285.066 90.0686C284.863 90.2106 284.669 90.3442 284.473 90.4972L136.183 200.118L136.202 200.166C132.517 202.769 130 207.399 130 212.46C130 220.472 136.035 226.966 143.079 226.966C144.807 226.966 145.626 226.566 148.298 225.858V225.862L223.581 194.244L166.018 415.217L181.133 420.312L224.903 252.28L224.802 456.993L240.563 457L240.664 252.334L284.229 420.303L299.344 415.223L240.219 187.248M302.983 149.985C288.907 149.985 277.499 137.001 277.499 120.992C277.499 104.976 288.907 91.9913 302.983 91.9913C317.058 91.9913 328.463 104.976 328.463 120.992C328.466 137.005 317.059 149.985 302.983 149.985Z"
        fill="url(#paint0_linear_0_1)"
      />
      <path
        d="M288.062 121.844H284.121C284.121 135.295 291.91 142.247 299.79 142.247V137.763C293.068 137.731 288.062 130.812 288.062 121.844H288.062Z"
        fill="white"
      />
      <mask
        id="mask0_0_1"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="350"
        y="82"
        width="335"
        height="57"
      >
        <path
          d="M405.242 111.728V82.1772H427.031V137.958H402.544L372.578 103.884V137.958H350.83V82.1772H380.754L405.242 111.728ZM474.965 98.4053L467.287 114.882H482.602L474.965 98.4053ZM432.091 138.042L462.016 82.2603H487.873L517.797 138.042H493.31L488.91 128.496H460.978L456.579 138.042H432.091ZM577.31 111.728V82.1772H599.1V137.958H574.613L544.647 103.884V137.958H522.899V82.1772H552.823L577.31 111.728ZM649.524 99.9409H612.793V82.2603H684.885V99.9409L646.826 120.319H684.885V138.042H612.793V120.319L649.524 99.9409Z"
          fill="url(#paint1_linear_0_1)"
          // className="animate-spin"
          // Nance
        />
      </mask>
      <g mask="url(#mask0_0_1)">
        <path
          d="M301.5 110L430.878 -56.4877L712.347 -105.512L981.026 -8.35591L1079.53 178.069L950.151 344.557L668.682 393.581L400.002 296.425L301.5 110Z"
          fill="url(#paint2_linear_0_1)"
          className="animate-spin duration-[1000ms] ease-in delay-1000"
          // rotate={rotate}
          // transform={`rotate(${rotate})`}

        />
      </g>
      <mask
        id="mask1_0_1"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="81"
        width="237"
        height="60"
        // className="animate-spin duration-10000 ease-in"
      >
        <path
          d="M0.830078 83.2188H54.5776C66.0742 83.0942 75.8276 92.7646 75.6616 104.303C75.6616 108.495 74.541 112.313 72.2998 115.716C70.1001 119.078 67.1533 121.651 63.501 123.353L75.6616 139H52.5024L42.002 125.387H22.5781V139H0.830078V83.2188ZM49.0991 99.5298H22.5781V109.034H49.0991C50.4272 109.034 51.5479 108.578 52.4609 107.665C53.4155 106.71 53.8721 105.589 53.8721 104.303C53.8721 101.646 51.7554 99.5298 49.0991 99.5298ZM85.8268 139.042V83.2603H151.112V97.5376H107.575V104.676H151.112V117.584H107.575V124.723H151.112V139.042H85.8268ZM183.233 101.563C183.233 104.012 189.998 104.344 198.756 104.759C214.32 105.548 236.192 106.627 236.151 120.614C236.151 136.551 217.889 140.328 198.299 140.328C178.751 140.287 162.523 137.921 160.447 120.614H183.233C185.723 124.93 191.492 126.051 198.299 126.051C205.064 126.051 213.365 124.93 213.365 120.614C213.365 118.165 206.6 117.792 197.842 117.376C182.279 116.588 160.406 115.509 160.447 101.563C160.447 85.626 178.709 81.8076 198.299 81.8076C217.847 81.9321 234.075 84.1318 236.151 101.563H213.365C210.875 97.1641 205.106 96.1265 198.299 96.1265C191.534 96.1265 183.233 97.1226 183.233 101.563Z"
          fill="url(#paint3_linear_0_1)"
          // className="animate-spin"
        />
      </mask>
      <g mask="url(#mask1_0_1)">
        {/* <circle
          cx="181.002"
          cy="109.956"
          r="10.5"
          transform="rotate(-85 181.002 109.956)"
          fill="white"
          // className="animate-spin"
        /> */}
        {/* <path
          d="M181.5 110L783.929 -55.0627L746.114 377.165L181.5 110Z"
          fill="url(#paint4_linear_0_1)"
          // className="animate-spin"

        /> */}
        <path
          d="M279.86 113.615L66.446 312.712L-322.568 278.677L-498.168 45.5465L-284.753 -153.55L104.261 -119.516L279.86 113.615Z"
          fill="url(#paint5_linear_0_1)"
          className="animate-spin duration-[1000ms] ease-in delay-1000"
          // rotate={rotate}
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_0_1"
          x1="239.619"
          y1="-51.1992"
          x2="232.204"
          y2="456.991"
          gradientUnits="userSpaceOnUse"

        >
          <stop stopColor="white" />
          <stop offset="0.257395" stopColor="#656770" />
          <stop offset="0.466375" stopColor="#000211" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_0_1"
          x1="519.282"
          y1="65.7121"
          x2="519.282"
          y2="185.985"
          gradientUnits="userSpaceOnUse"
          // className="animate-spin duration-4000 ease-in"
        >
          <stop stopColor="#000211" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_0_1"
          x1="377.924"
          y1="116.686"
          x2="966.933"
          y2="161.461"
          gradientUnits="userSpaceOnUse"
          // className="animate-spin duration-4000 ease-in"
        >
          <stop stopColor="white" />
          <stop offset="0.277059" stopColor="white" stopOpacity="0.5" />
          <stop offset="0.588341" stopColor="white" stopOpacity="0.25" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_0_1"
          x1="119.405"
          y1="66.7121"
          x2="119.405"
          y2="186.985"
          gradientUnits="userSpaceOnUse"
          // className="animate-spin"
        >
          <stop stopColor="#000211" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_0_1"
          x1="257.924"
          y1="116.686"
          x2="846.932"
          y2="161.46"
          gradientUnits="userSpaceOnUse"
          // className="animate-spin"
        >
          <stop stopColor="white" />
          <stop offset="0.277059" stopColor="white" stopOpacity="0.5" />
          <stop offset="0.588341" stopColor="white" stopOpacity="0.25" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint5_linear_0_1"
          x1="203.437"
          y1="106.929"
          x2="-385.572"
          y2="62.1546"
          gradientUnits="userSpaceOnUse"
          // className="animate-spin"
        >
          <stop stopColor="white" />
          <stop offset="0.277059" stopColor="white" stopOpacity="0.5" />
          <stop offset="0.588341" stopColor="white" stopOpacity="0.25" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};
