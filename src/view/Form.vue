<template>
  <main>
    <section>
    
      <div class="max-w-7xl px-6 mx-auto shadow-xl">
  
        <div class="items-center md:flex md:space-x-6">
          <div class="md:w-7/12 w-full text-center">
            <form method="POST" class="appointment-form" id="appointment-form">
               <!-- component -->
    <div class="flex h-screen items-center justify-center">
      <div class="grid bg-white w-full">
        <div class="flex justify-center py-4">
          <div class="ic flex rounded-full md:p-4 p-2 border-2 border-purple-300">
            <svg width="50" height="50" viewBox="0 0 93 130" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0)">
              <path d="M44.71 54.11L58.18 39H87.83L54.32 76.06L85.98 125H58.65L38.27 93.04L29 103.08V125H10" stroke="white" stroke-width="4" stroke-miterlimit="10"/>
              <path d="M6 84V2H29V30.59" stroke="white" stroke-width="4" stroke-miterlimit="10"/>
              <path d="M42 64C45.3137 64 48 61.3137 48 58C48 54.6863 45.3137 52 42 52C38.6863 52 36 54.6863 36 58C36 61.3137 38.6863 64 42 64Z" fill="white"/>
              <path d="M29 29.36C27.8548 29.36 26.7354 29.6996 25.7832 30.3358C24.8311 30.972 24.089 31.8763 23.6507 32.9343C23.2125 33.9922 23.0978 35.1564 23.3213 36.2796C23.5447 37.4027 24.0961 38.4344 24.9059 39.2441C25.7156 40.0539 26.7473 40.6053 27.8704 40.8287C28.9936 41.0522 30.1578 40.9375 31.2157 40.4993C32.2737 40.061 33.178 39.3189 33.8142 38.3668C34.4504 37.4146 34.79 36.2952 34.79 35.15C34.79 33.6144 34.18 32.1417 33.0941 31.0559C32.0083 29.97 30.5356 29.36 29 29.36ZM29 38.15C28.4067 38.15 27.8266 37.9741 27.3333 37.6444C26.8399 37.3148 26.4554 36.8462 26.2284 36.298C26.0013 35.7499 25.9419 35.1467 26.0576 34.5647C26.1734 33.9828 26.4591 33.4482 26.8787 33.0287C27.2982 32.6091 27.8328 32.3234 28.4147 32.2076C28.9967 32.0919 29.5999 32.1513 30.1481 32.3784C30.6962 32.6054 31.1648 32.9899 31.4944 33.4833C31.8241 33.9766 32 34.5567 32 35.15C32 35.9457 31.6839 36.7087 31.1213 37.2713C30.5587 37.8339 29.7956 38.15 29 38.15Z" fill="white"/>
              <path d="M6 92C9.31371 92 12 89.3137 12 86C12 82.6863 9.31371 80 6 80C2.68629 80 0 82.6863 0 86C0 89.3137 2.68629 92 6 92Z" fill="white"/>
              <path d="M5.82 118.42C4.67485 118.42 3.55541 118.76 2.60325 119.396C1.65109 120.032 0.908969 120.936 0.470738 121.994C0.0325061 123.052 -0.0821552 124.216 0.141253 125.34C0.364662 126.463 0.916106 127.494 1.72585 128.304C2.5356 129.114 3.56728 129.665 4.69043 129.889C5.81358 130.112 6.97775 129.997 8.03574 129.559C9.09372 129.121 9.99799 128.379 10.6342 127.427C11.2704 126.475 11.61 125.355 11.61 124.21C11.61 122.674 11 121.202 9.91415 120.116C8.82831 119.03 7.3556 118.42 5.82 118.42ZM5.82 127.21C5.22666 127.21 4.64664 127.034 4.15329 126.704C3.65994 126.375 3.27542 125.906 3.04836 125.358C2.8213 124.81 2.76189 124.207 2.87764 123.625C2.9934 123.043 3.27912 122.508 3.69868 122.089C4.11824 121.669 4.65279 121.383 5.23473 121.268C5.81667 121.152 6.41987 121.211 6.96805 121.438C7.51623 121.665 7.98476 122.05 8.31441 122.543C8.64405 123.037 8.82 123.617 8.82 124.21C8.82 125.006 8.50393 125.769 7.94132 126.331C7.37871 126.894 6.61565 127.21 5.82 127.21Z" fill="white"/>
              </g>
              <defs>
              <clipPath id="clip0">
              <rect width="92.33" height="130" fill="white"/>
              </clipPath>
              </defs>
              </svg>
              
              
          </div>
        </div>
    
        <div class="flex justify-center">
          <div class="flex">
            <h1 class="text-gray-600 font-bold md:text-2xl text-xl">Sign Up</h1>
          </div>
        </div>
    
        <div class="grid grid-cols-1 mt-5 mx-7">
          <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold"></label>
          <input class="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Name" />
        </div>
    
        <div class="grid grid-cols-1 mt-5 mx-7">
          <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold"></label>
          <input class="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="email" placeholder="Email" />
        </div>
    
        <div class="grid grid-cols-1 mt-5 mx-7">
          <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold"></label>
          <select class="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent">
            <option>Python for Data Science</option>
            <option>SQL</option>
            <option>Machine Learning</option>
          </select>
        </div>
    
        <div class='items-center justify-center pt-5 pb-5'>
          <div class="flex justify-center">
            <div class="flex">
              <button id="button" type="button" class="cta w-full ml-auto mr-auto px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-pink-500 hover:bg-pink-600 hover:shadow-lg focus:outline-none">
              Make Payment
            </button>
          </div>
        </div>
      </div>
    
      </div>
    </div>
    
          </form>
          </div>
    
          <div class="mt-8 md:mt-0 md:w-5/12 flex flex-wrap -mx-2 overflow-hidden">
            <img src="./assets/images/3784896.jpg" alt="">
          </div>
        </div>
      </div>
      
  </section>

  <style>
    .cta, .ic{
      background-color: #4e1d5b;
    }
    .cta:hover{
      background-color: #4e1d5b;
    }
  </style>
  </main>
</template>