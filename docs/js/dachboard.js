//  print loading
let loads = document.querySelectorAll(".loads");

loads.forEach((l) => {
  l.innerHTML = load();
});
function load() {
  let loaded = `<section class="fixed hide z-50 bottom-0 h-full w-full top-0 overflow-hidden">
    <div class="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center">
        <div class="absolute z-[50] text-center">
            <div class="rot">
                <img src="./images/logo2.svg" class="inline-block ops" alt="">
            </div>
            <div class="postion">
                <div class="text-[56px]  ops"><span class="text-white">mar</span><span
                        class="text-red-600">raix</span></div>
            </div>
        </div>
    </div>
    <div class="bg-black w-full h-[50vh] post"></div>
    <div class="bg-black w-full h-[50vh] posb"></div>
</section>`;
  return loaded;
}
// print dashbord
let dash = document.querySelectorAll(".dash");

dash.forEach((d) => {
  d.innerHTML = printdashbord();
});
function printdashbord() {
  let dashbord = `  <div class="flex fixed  lg:h-[64px] h-[71px]  flex-row-reverse z-40    w-full">
    <nav class="right-0  top-[-2px] relative   dark:bg-[#1e1e2d] h-full bg-white z-50 xl:w-[82%] lg:w-[79%] w-full">
      <div class="px-3 py-3 lg:px-5 lg:pl-3 shadow-sm">
        <div class="flex items-center justify-between">
          <!-- left -->
          <div class=" ">
            <div class="lg:flex hidden items-center capitalize text-sm font-medium text-[#5E6278]">
              <h1
                class="dark:active1 active2 act1 duration-500 px-4 rounded-md mx-3 py-2 hover:bg-[#F9F9F9] cursor-pointer dark:hover:bg-[#2A2A3C] hover:text-[#009ef7]">
                dashborad
              </h1>
              <h1
                class="px-4 rounded-md mx-3 py-2 duration-500 act1 hover:bg-[#F9F9F9] cursor-pointer dark:hover:bg-[#2A2A3C] hover:text-[#009ef7]">
                pages
              </h1>
              <h1
                class="px-4 rounded-md mx-3 py-2 duration-500 act1 hover:bg-[#F9F9F9] dark:hover:bg-[#2A2A3C] cursor-pointer hover:text-[#009ef7]">
                Apps
              </h1>
              <h1
                class="px-4 rounded-md mx-3 py-2 duration-500 act1 hover:bg-[#F9F9F9] dark:hover:bg-[#2A2A3C] cursor-pointer hover:text-[#009ef7]">
                layout
              </h1>
              <h1
                class="px-4 rounded-md mx-3 py-2 duration-500 act1 hover:bg-[#F9F9F9] dark:hover:bg-[#2A2A3C] cursor-pointer hover:text-[#009ef7]">
                helps
              </h1>
            </div>
            <!-- mobile -->
            <div class="lg:hidden flex items-center justify-start">
              <button id="toggleSidebarMobile" aria-expanded="true" aria-controls="sidebar"
                class="text-gray-600 hover:text-white cursor-pointer p-2   focus:ring-2 focus:ring-gray-100 rounded">
                <svg id="toggleSidebarMobileHamburger" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"></path>
                </svg>
                <svg id="toggleSidebarMobileClose" class="w-6 h-6 hidden" fill="currentColor" viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"></path>
                </svg>
              </button>

              <a class="flex items-center w-14 lg:ml-2.5 p-3">
                <img src="./images/logo2.svg" class="mr-2" alt="Windster Logo" />
              </a>
            </div>
          </div>
          <!-- right -->
          <div class="flex items-center relative">
            <h1
              class="search lg:mx-1 lg:h-10 lg:w-10 h-8 w-8 rounded-md duration-300 hover:bg-[#e0e0e0a3] px-1 py-1 cursor-pointer">
              <span
                class="svg-icon svg-icon-primary svg-icon-2x"><!--begin::Svg Icon | path:/var/www/preview.keenthemes.com/metronic/releases/2021-05-14-112058/theme/html/demo1/dist/../src/media/svg/icons/General/Search.svg--><svg
                  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"
                  version="1.1">
                  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <rect x="0" y="0" />
                    <path
                      d="M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z"
                      class="fill-[#A1A5B7] duration-300" fill-rule="nonzero" opacity="0.3" />
                    <path
                      d="M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z"
                      class="fill-[#A1A5B7] duration-300" fill-rule="nonzero" />
                  </g>
                </svg><!--end::Svg Icon--></span>
            </h1>
            <h1
              class="lg:mx-1 lg:h-10 lg:w-10 h-8 w-8 search rounded-md duration-300 hover:bg-[#e0e0e0a3] px-1 py-1 cursor-pointer">
              <span
                class="svg-icon svg-icon-primary svg-icon-2x"><!--begin::Svg Icon | path:/var/www/preview.keenthemes.com/metronic/releases/2021-05-14-112058/theme/html/demo1/dist/../src/media/svg/icons/General/Notifications1.svg--><svg
                  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"
                  version="1.1">
                  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <path
                      d="M17,12 L18.5,12 C19.3284271,12 20,12.6715729 20,13.5 C20,14.3284271 19.3284271,15 18.5,15 L5.5,15 C4.67157288,15 4,14.3284271 4,13.5 C4,12.6715729 4.67157288,12 5.5,12 L7,12 L7.5582739,6.97553494 C7.80974924,4.71225688 9.72279394,3 12,3 C14.2772061,3 16.1902508,4.71225688 16.4417261,6.97553494 L17,12 Z"
                      class="fill-[#A1A5B7] duration-300" />
                    <rect fill="#000000" opacity="0.3" x="10" y="16" width="4" height="4" rx="2" />
                  </g>
                </svg><!--end::Svg Icon--></span>
            </h1>

            <h1
              class="search lg:mx-1 lg:h-8 lg:w-8 h-6 w-6 rounded-md duration-300 hover:bg-[#e0e0e0a3] cursor-pointer">
              <span
                class="svg-icon svg-icon-primary svg-icon-2x"><!--begin::Svg Icon | path:/var/www/preview.keenthemes.com/metronic/releases/2021-05-14-112058/theme/html/demo1/dist/../src/media/svg/icons/Communication/Chat1.svg--><svg
                  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"
                  version="1.1">
                  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <rect x="0" y="0" />
                    <polygon fill="#000000" opacity="0.3" points="5 15 3 21.5 9.5 19.5" />
                    <path class="fill-[#A1A5B7] duration-300"
                      d="M13.5,21 C8.25329488,21 4,16.7467051 4,11.5 C4,6.25329488 8.25329488,2 13.5,2 C18.7467051,2 23,6.25329488 23,11.5 C23,16.7467051 18.7467051,21 13.5,21 Z M8.5,13 C9.32842712,13 10,12.3284271 10,11.5 C10,10.6715729 9.32842712,10 8.5,10 C7.67157288,10 7,10.6715729 7,11.5 C7,12.3284271 7.67157288,13 8.5,13 Z M13.5,13 C14.3284271,13 15,12.3284271 15,11.5 C15,10.6715729 14.3284271,10 13.5,10 C12.6715729,10 12,10.6715729 12,11.5 C12,12.3284271 12.6715729,13 13.5,13 Z M18.5,13 C19.3284271,13 20,12.3284271 20,11.5 C20,10.6715729 19.3284271,10 18.5,10 C17.6715729,10 17,10.6715729 17,11.5 C17,12.3284271 17.6715729,13 18.5,13 Z"
                      fill="#000000" />
                  </g>
                </svg><!--end::Svg Icon--></span>
            </h1>

            <h1
              class="lg:mx-1 lg:h-10 lg:w-10 h-8 w-8 search rounded-md duration-300 hover:bg-[#e0e0e0a3] px-1 py-1 cursor-pointer">
              <span
                class="svg-icon svg-icon-primary svg-icon-2x"><!--begin::Svg Icon | path:/var/www/preview.keenthemes.com/metronic/releases/2021-05-14-112058/theme/html/demo1/dist/../src/media/svg/icons/Communication/Chat6.svg--><svg
                  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"
                  version="1.1">
                  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <rect x="0" y="0" width="30" height="30" />
                    <path class="fill-[#A1A5B7] duration-300" opacity="0.3" fill-rule="evenodd" clip-rule="evenodd"
                      d="M14.4862 18L12.7975 21.0566C12.5304 21.54 11.922 21.7153 11.4386 21.4483C11.2977 21.3704 11.1777 21.2597 11.0887 21.1255L9.01653 18H5C3.34315 18 2 16.6569 2 15V6C2 4.34315 3.34315 3 5 3H19C20.6569 3 22 4.34315 22 6V15C22 16.6569 20.6569 18 19 18H14.4862Z"
                      fill="black" />
                    <path fill-rule="evenodd" class="fill-[#A1A5B7] duration-300" clip-rule="evenodd"
                      d="M6 7H15C15.5523 7 16 7.44772 16 8C16 8.55228 15.5523 9 15 9H6C5.44772 9 5 8.55228 5 8C5 7.44772 5.44772 7 6 7ZM6 11H11C11.5523 11 12 11.4477 12 12C12 12.5523 11.5523 13 11 13H6C5.44772 13 5 12.5523 5 12C5 11.4477 5.44772 11 6 11Z"
                      fill="black" />
                  </g>
                </svg><!--end::Svg Icon--></span>
            </h1>

            <h1
              class="lg:mx-1 lg:h-10 lg:w-10 h-8 w-8 search rounded-md duration-300 hover:bg-[#e0e0e0a3] px-1 py-1 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"
                version="1.1">
                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <rect x="0" y="0" width="24" height="24"></rect>
                  <rect fill="#A1A5B7" x="4" y="4" width="7" height="7" rx="1.5"></rect>
                  <path class="fill-[#A1A5B7] duration-300"
                    d="M5.5,13 L9.5,13 C10.3284271,13 11,13.6715729 11,14.5 L11,18.5 C11,19.3284271 10.3284271,20 9.5,20 L5.5,20 C4.67157288,20 4,19.3284271 4,18.5 L4,14.5 C4,13.6715729 4.67157288,13 5.5,13 Z M14.5,4 L18.5,4 C19.3284271,4 20,4.67157288 20,5.5 L20,9.5 C20,10.3284271 19.3284271,11 18.5,11 L14.5,11 C13.6715729,11 13,10.3284271 13,9.5 L13,5.5 C13,4.67157288 13.6715729,4 14.5,4 Z M14.5,13 L18.5,13 C19.3284271,13 20,13.6715729 20,14.5 L20,18.5 C20,19.3284271 19.3284271,20 18.5,20 L14.5,20 C13.6715729,20 13,19.3284271 13,18.5 L13,14.5 C13,13.6715729 13.6715729,13 14.5,13 Z"
                    fill="#A1A5B7" opacity="0.3"></path>
                </g>
              </svg>
            </h1>
            <h1
              class="lg:mx-1  mood  lg:h-10 lg:w-10 h-8 w-8   rounded-md duration-300 hover:bg-[#e0e0e0a3] px-1 py-1 cursor-pointer">
              <span class="svg-icon hidden svg-icon-primary svg-icon-2x"
                id="light1"><!--begin::Svg Icon | path:/var/www/preview.keenthemes.com/metronic/releases/2021-05-14-112058/theme/html/demo1/dist/../src/media/svg/icons/Weather/Sun.svg--><svg
                  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"
                  version="1.1">
                  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <rect x="0" y="0" width="24" height="24" />
                    <path class="fill-[#A1A5B7] duration-300 jj"
                      d="M12,15 C10.3431458,15 9,13.6568542 9,12 C9,10.3431458 10.3431458,9 12,9 C13.6568542,9 15,10.3431458 15,12 C15,13.6568542 13.6568542,15 12,15 Z"
                      fill="#000000" fill-rule="nonzero" />
                    <path class="fill-[#A1A5B7] duration-300 jj"
                      d="M19.5,10.5 L21,10.5 C21.8284271,10.5 22.5,11.1715729 22.5,12 C22.5,12.8284271 21.8284271,13.5 21,13.5 L19.5,13.5 C18.6715729,13.5 18,12.8284271 18,12 C18,11.1715729 18.6715729,10.5 19.5,10.5 Z M16.0606602,5.87132034 L17.1213203,4.81066017 C17.7071068,4.22487373 18.6568542,4.22487373 19.2426407,4.81066017 C19.8284271,5.39644661 19.8284271,6.34619408 19.2426407,6.93198052 L18.1819805,7.99264069 C17.5961941,8.57842712 16.6464466,8.57842712 16.0606602,7.99264069 C15.4748737,7.40685425 15.4748737,6.45710678 16.0606602,5.87132034 Z M16.0606602,18.1819805 C15.4748737,17.5961941 15.4748737,16.6464466 16.0606602,16.0606602 C16.6464466,15.4748737 17.5961941,15.4748737 18.1819805,16.0606602 L19.2426407,17.1213203 C19.8284271,17.7071068 19.8284271,18.6568542 19.2426407,19.2426407 C18.6568542,19.8284271 17.7071068,19.8284271 17.1213203,19.2426407 L16.0606602,18.1819805 Z M3,10.5 L4.5,10.5 C5.32842712,10.5 6,11.1715729 6,12 C6,12.8284271 5.32842712,13.5 4.5,13.5 L3,13.5 C2.17157288,13.5 1.5,12.8284271 1.5,12 C1.5,11.1715729 2.17157288,10.5 3,10.5 Z M12,1.5 C12.8284271,1.5 13.5,2.17157288 13.5,3 L13.5,4.5 C13.5,5.32842712 12.8284271,6 12,6 C11.1715729,6 10.5,5.32842712 10.5,4.5 L10.5,3 C10.5,2.17157288 11.1715729,1.5 12,1.5 Z M12,18 C12.8284271,18 13.5,18.6715729 13.5,19.5 L13.5,21 C13.5,21.8284271 12.8284271,22.5 12,22.5 C11.1715729,22.5 10.5,21.8284271 10.5,21 L10.5,19.5 C10.5,18.6715729 11.1715729,18 12,18 Z M4.81066017,4.81066017 C5.39644661,4.22487373 6.34619408,4.22487373 6.93198052,4.81066017 L7.99264069,5.87132034 C8.57842712,6.45710678 8.57842712,7.40685425 7.99264069,7.99264069 C7.40685425,8.57842712 6.45710678,8.57842712 5.87132034,7.99264069 L4.81066017,6.93198052 C4.22487373,6.34619408 4.22487373,5.39644661 4.81066017,4.81066017 Z M4.81066017,19.2426407 C4.22487373,18.6568542 4.22487373,17.7071068 4.81066017,17.1213203 L5.87132034,16.0606602 C6.45710678,15.4748737 7.40685425,15.4748737 7.99264069,16.0606602 C8.57842712,16.6464466 8.57842712,17.5961941 7.99264069,18.1819805 L6.93198052,19.2426407 C6.34619408,19.8284271 5.39644661,19.8284271 4.81066017,19.2426407 Z"
                      fill="#000000" fill-rule="nonzero" opacity="0.3" />
                  </g>
                </svg><!--end::Svg Icon--></span>

              <span class="svg-icon  svg-icon-primary svg-icon-2x block lg:mt-1"
                id="dark1"><!--begin::Svg Icon | path:/var/www/preview.keenthemes.com/metronic/releases/2021-05-14-112058/theme/html/demo1/dist/../src/media/svg/icons/Weather/Moon.svg--><svg
                  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px"
                  height="24px" viewBox="0 0 24 24" version="1.1">
                  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <rect x="0" y="0" width="30" height="30" />
                    <path class="fill-[#A1A5B7] duration-300 jj"
                      d="M12.0700837,4.0003006 C11.3895108,5.17692613 11,6.54297551 11,8 C11,12.3948932 14.5439081,15.9620623 18.9299163,15.9996994 C17.5467214,18.3910707 14.9612535,20 12,20 C7.581722,20 4,16.418278 4,12 C4,7.581722 7.581722,4 12,4 C12.0233848,4 12.0467462,4.00010034 12.0700837,4.0003006 Z" />
                  </g>
                </svg><!--end::Svg Icon--></span>
              <ul
                class=" absolute ani hidden duration-500 z-50  bg-white dark:bg-[#1e1e2d] border  px-6 py-2 rounded-md  ltr:right-0 rtl:left-0">
                <li data-va="light" class="search act1 px-4 py-1 rounded-md cursor-pointer flex ">
                  <span
                    class="svg-icon fill-[#A1A5B7] duration-300 svg-icon-primary svg-icon-2x"><!--begin::Svg Icon | path:/var/www/preview.keenthemes.com/metronic/releases/2021-05-14-112058/theme/html/demo1/dist/../src/media/svg/icons/Weather/Sun.svg--><svg
                      xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px"
                      height="24px" viewBox="0 0 24 24" version="1.1">
                      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <rect x="0" y="0" width="24" height="24" />
                        <path class="fill-[#A1A5B7] duration-300"
                          d="M12,15 C10.3431458,15 9,13.6568542 9,12 C9,10.3431458 10.3431458,9 12,9 C13.6568542,9 15,10.3431458 15,12 C15,13.6568542 13.6568542,15 12,15 Z"
                          fill="#000000" fill-rule="nonzero" />
                        <path class="fill-[#A1A5B7] duration-300"
                          d="M19.5,10.5 L21,10.5 C21.8284271,10.5 22.5,11.1715729 22.5,12 C22.5,12.8284271 21.8284271,13.5 21,13.5 L19.5,13.5 C18.6715729,13.5 18,12.8284271 18,12 C18,11.1715729 18.6715729,10.5 19.5,10.5 Z M16.0606602,5.87132034 L17.1213203,4.81066017 C17.7071068,4.22487373 18.6568542,4.22487373 19.2426407,4.81066017 C19.8284271,5.39644661 19.8284271,6.34619408 19.2426407,6.93198052 L18.1819805,7.99264069 C17.5961941,8.57842712 16.6464466,8.57842712 16.0606602,7.99264069 C15.4748737,7.40685425 15.4748737,6.45710678 16.0606602,5.87132034 Z M16.0606602,18.1819805 C15.4748737,17.5961941 15.4748737,16.6464466 16.0606602,16.0606602 C16.6464466,15.4748737 17.5961941,15.4748737 18.1819805,16.0606602 L19.2426407,17.1213203 C19.8284271,17.7071068 19.8284271,18.6568542 19.2426407,19.2426407 C18.6568542,19.8284271 17.7071068,19.8284271 17.1213203,19.2426407 L16.0606602,18.1819805 Z M3,10.5 L4.5,10.5 C5.32842712,10.5 6,11.1715729 6,12 C6,12.8284271 5.32842712,13.5 4.5,13.5 L3,13.5 C2.17157288,13.5 1.5,12.8284271 1.5,12 C1.5,11.1715729 2.17157288,10.5 3,10.5 Z M12,1.5 C12.8284271,1.5 13.5,2.17157288 13.5,3 L13.5,4.5 C13.5,5.32842712 12.8284271,6 12,6 C11.1715729,6 10.5,5.32842712 10.5,4.5 L10.5,3 C10.5,2.17157288 11.1715729,1.5 12,1.5 Z M12,18 C12.8284271,18 13.5,18.6715729 13.5,19.5 L13.5,21 C13.5,21.8284271 12.8284271,22.5 12,22.5 C11.1715729,22.5 10.5,21.8284271 10.5,21 L10.5,19.5 C10.5,18.6715729 11.1715729,18 12,18 Z M4.81066017,4.81066017 C5.39644661,4.22487373 6.34619408,4.22487373 6.93198052,4.81066017 L7.99264069,5.87132034 C8.57842712,6.45710678 8.57842712,7.40685425 7.99264069,7.99264069 C7.40685425,8.57842712 6.45710678,8.57842712 5.87132034,7.99264069 L4.81066017,6.93198052 C4.22487373,6.34619408 4.22487373,5.39644661 4.81066017,4.81066017 Z M4.81066017,19.2426407 C4.22487373,18.6568542 4.22487373,17.7071068 4.81066017,17.1213203 L5.87132034,16.0606602 C6.45710678,15.4748737 7.40685425,15.4748737 7.99264069,16.0606602 C8.57842712,16.6464466 8.57842712,17.5961941 7.99264069,18.1819805 L6.93198052,19.2426407 C6.34619408,19.8284271 5.39644661,19.8284271 4.81066017,19.2426407 Z"
                          fill="#000000" fill-rule="nonzero" opacity="0.3" />
                      </g>
                    </svg><!--end::Svg Icon--></span>
                  <span class="mx-2 text-[#A1A5B7] duration-300 ">light</span>

                </li>
                <li data-va="dark" class="search act1  rounded-md px-4 py-1 cursor-pointer flex my-3 ">
                  <span
                    class="svg-icon svg-icon-primary svg-icon-2x"><!--begin::Svg Icon | path:/var/www/preview.keenthemes.com/metronic/releases/2021-05-14-112058/theme/html/demo1/dist/../src/media/svg/icons/Weather/Moon.svg--><svg
                      xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px"
                      height="24px" viewBox="0 0 24 24" version="1.1">
                      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <rect x="0" y="0" width="24" height="24" />
                        <path class="fill-[#A1A5B7] duration-300"
                          d="M12.0700837,4.0003006 C11.3895108,5.17692613 11,6.54297551 11,8 C11,12.3948932 14.5439081,15.9620623 18.9299163,15.9996994 C17.5467214,18.3910707 14.9612535,20 12,20 C7.581722,20 4,16.418278 4,12 C4,7.581722 7.581722,4 12,4 C12.0233848,4 12.0467462,4.00010034 12.0700837,4.0003006 Z"
                          fill="#000000" />
                      </g>
                    </svg><!--end::Svg Icon--></span>
                  <span class="mx-2 text-[#A1A5B7] duration-300 ">dark</span>

                </li>

                <li data-va="system" class="search  rounded-md act1 px-4 py-1 cursor-pointer flex ">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6"
                    viewBox="0 0 576 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path class="fill-[#A1A5B7] duration-300"
                      d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64H240l-10.7 32H160c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H346.7L336 416H512c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zM512 64V288H64V64H512z" />
                  </svg>
                  <span class="mx-2 text-[#A1A5B7] duration-300 ">system</span>

                </li>


              </ul>

            </h1>

            <div class="w-10 mx-3">
              <img class="inline-block rounded-lg" src="./images/mohamed.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div id="backgrou" class="bg-[#00000053] hidden w-screen h-screen z-40 absolute top-0 left-0"></div>

    <aside id="sidebar"
      class="w-0 absolute lg:relative h-screen  top-0 ltr:left-0 rtl:right-0 z-50 dark:text-gray-200 duration-500 flex lg:flex flex-shrink-0 flex-col lg:w-[21%] xl:w-[18%] transition-width"
      aria-label="Sidebar">
      <div class="relative   dark:text-gray-200 flex-1 flex flex-col min-h-0 bg-[#1e1e2d] pt-0">
        <div class="scrollbar h-screen overflow-hidden flex-1 dark:text-gray-200 flex flex-col pt-3 ">
          <div class="items-center justify-start hidden lg:flex">
            <a class="flex items-center lg:ml-2.5 p-3">
              <img src="./images/logo1.svg" class="w-[45%] mr-2" alt="Windster Logo" />
            </a>
          </div>
          <hr style="border-style: dashed; border-color: #535353" class="hidden lg:block my-1" />

          <h1 id="error"
            class="text-right lg:hidden px-4 fill-[#009ef7] cursor-pointer flex ltr:items-end ltr:justify-end rtl:items-start rtl:justify-start">
            <span
              class="svg-icon svg-icon-primary svg-icon-2x"><!--begin::Svg Icon | path:/var/www/preview.keenthemes.com/metronic/releases/2021-05-14-112058/theme/html/demo1/dist/../src/media/svg/icons/Code/Error-circle.svg--><svg
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px"
                viewBox="0 0 24 24" version="1.1">
                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <rect x="0" y="0" width="30" height="30" />
                  <circle fill="#9D9DA6" class="hover:fill-[#009ef7] duration-500" opacity="0.3" cx="12" cy="12"
                    r="10" />
                  <path class="fill-white"
                    d="M12.0355339,10.6213203 L14.863961,7.79289322 C15.2544853,7.40236893 15.8876503,7.40236893 16.2781746,7.79289322 C16.6686989,8.18341751 16.6686989,8.81658249 16.2781746,9.20710678 L13.4497475,12.0355339 L16.2781746,14.863961 C16.6686989,15.2544853 16.6686989,15.8876503 16.2781746,16.2781746 C15.8876503,16.6686989 15.2544853,16.6686989 14.863961,16.2781746 L12.0355339,13.4497475 L9.20710678,16.2781746 C8.81658249,16.6686989 8.18341751,16.6686989 7.79289322,16.2781746 C7.40236893,15.8876503 7.40236893,15.2544853 7.79289322,14.863961 L10.6213203,12.0355339 L7.79289322,9.20710678 C7.40236893,8.81658249 7.40236893,8.18341751 7.79289322,7.79289322 C8.18341751,7.40236893 8.81658249,7.40236893 9.20710678,7.79289322 L12.0355339,10.6213203 Z"
                    fill="#000000" />
                </g>
              </svg><!--end::Svg Icon--></span>
          </h1>

          <div
            class="scrollbar2 dark:scrollbar2dark flex-1 bg-[#1e1e2d]  h-screen   duration-500   hover:overflow-y-scroll dark:text-gray-200 px-3 divide-y space-y-1">
            <div class="px-3 h-screen " id="divall">
    

            </div>
          </div>


        </div>

      </div>
    </aside>
  </div>`;
  return dashbord;
}

// print footer
let foot = document.querySelectorAll(".foot");

foot.forEach((f) => {
  f.innerHTML = footer();
});
function footer() {
  let foot = `    <div class="xl:w-[82%] lg:w-[79%] w-full ltr:ml-auto rtl:mr-auto mt-16">
         <footer class="bg-white dark:bg-gray-900  dark:text-gray-200 md:flex md:items-center md:justify-between shadow rounded-lg p-4 md:p-6 xl:p-8 my-6 mx-4">
             <ul class="flex items-center flex-wrap mb-6 md:mb-0">
                <li><a class="text-sm font-normal  text-gray-500 hover:underline mr-4 md:mr-6">Terms and conditions</a></li>
                <li><a class="text-sm font-normal  text-gray-500 hover:underline mr-4 md:mr-6">Privacy Policy</a></li>
                <li><a class="text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6">Licensing</a></li>
                <li><a class="text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6">Cookie Policy</a></li>
                <li><a class="text-sm font-normal text-gray-500 hover:underline">Contact</a></li>
             </ul>
             <div class="flex sm:justify-center space-x-6">
                <a href="https://www.facebook.com/profile.php?id=100042162248638" class="text-gray-500 hover:text-gray-900">
                   <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />
                   </svg>
                </a>
                <a href="https://www.instagram.com/m7mdk_f/" class="text-gray-500 hover:text-gray-900">
                   <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" />
                   </svg>
                </a>
                <a class="text-gray-500 hover:text-gray-900">
                   <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                   </svg>
                </a>
                <a class="text-gray-500 hover:text-gray-900">
                   <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
                   </svg>
                </a>
                <a class="text-gray-500 hover:text-gray-900 dark:hover:text-gray-600 ">
                   <svg class="h-5 w-5" fill="currentColor"  viewBox="0 0 24 24" aria-hidden="true">
                      <path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clip-rule="evenodd" />
                   </svg>
                </a>
             </div>
          </footer>
          <p class="text-center dark:bg-gray-800   dark:text-gray-200 text-sm text-gray-500 py-10">
             &copy; 4/7/2023 <a class="hover:underline" >Made by mohamed</a>. with team
          </p>
          </div>`;
  return foot;
}

// print code
let comcode1 = document.querySelectorAll(".comcode1");

comcode1.forEach((container) => {
  // Get the HTML code of the iframe element inside the container
  let iframe = container.querySelector("iframe");

  if (iframe) {
    let iframeCode = iframe.outerHTML;
    console.log(iframeCode)
    container.innerHTML = componanc(iframeCode);
  }

  else {
    let code = container.innerHTML;
    container.innerHTML = componanc(code);
  }
});
function componanc(Code) {
  let retcod = `     <div
        class="flex justify-center xl:w-[82%] lg:w-[79%] pt-[80px]     px-3 lg:px-9  w-full  ltr:ml-auto rtl:mr-auto items-center ">
    
        <div class="  dark:backgrounddark py-3 background  rounded-lg  w-full space-y-2 ">
          <div class="flex px-5 justify-between ">
            <h1 class="text-center dark:text-white text-xl font-bold "> other</h1>
            <li class="search hidden  act1 px-4 py-1 rounded-md cursor-pointer  relative z-30 flex ">
              <span
                class="svg-icon fill-[#A1A5B7] duration-300   cursor-pointer svg-icon-primary svg-icon-2x"><!--begin::Svg Icon | path:/var/www/preview.keenthemes.com/metronic/releases/2021-05-14-112058/theme/html/demo1/dist/../src/media/svg/icons/Weather/Sun.svg--><svg
                  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px"
                  viewBox="0 0 24 24" version="1.1">
                  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <rect x="0" y="0" width="24" height="24" />
                    <path class="fill-[#A1A5B7] duration-300"
                      d="M12,15 C10.3431458,15 9,13.6568542 9,12 C9,10.3431458 10.3431458,9 12,9 C13.6568542,9 15,10.3431458 15,12 C15,13.6568542 13.6568542,15 12,15 Z"
                      fill="#000000" fill-rule="nonzero" />
                    <path class="fill-[#A1A5B7] duration-300"
                      d="M19.5,10.5 L21,10.5 C21.8284271,10.5 22.5,11.1715729 22.5,12 C22.5,12.8284271 21.8284271,13.5 21,13.5 L19.5,13.5 C18.6715729,13.5 18,12.8284271 18,12 C18,11.1715729 18.6715729,10.5 19.5,10.5 Z M16.0606602,5.87132034 L17.1213203,4.81066017 C17.7071068,4.22487373 18.6568542,4.22487373 19.2426407,4.81066017 C19.8284271,5.39644661 19.8284271,6.34619408 19.2426407,6.93198052 L18.1819805,7.99264069 C17.5961941,8.57842712 16.6464466,8.57842712 16.0606602,7.99264069 C15.4748737,7.40685425 15.4748737,6.45710678 16.0606602,5.87132034 Z M16.0606602,18.1819805 C15.4748737,17.5961941 15.4748737,16.6464466 16.0606602,16.0606602 C16.6464466,15.4748737 17.5961941,15.4748737 18.1819805,16.0606602 L19.2426407,17.1213203 C19.8284271,17.7071068 19.8284271,18.6568542 19.2426407,19.2426407 C18.6568542,19.8284271 17.7071068,19.8284271 17.1213203,19.2426407 L16.0606602,18.1819805 Z M3,10.5 L4.5,10.5 C5.32842712,10.5 6,11.1715729 6,12 C6,12.8284271 5.32842712,13.5 4.5,13.5 L3,13.5 C2.17157288,13.5 1.5,12.8284271 1.5,12 C1.5,11.1715729 2.17157288,10.5 3,10.5 Z M12,1.5 C12.8284271,1.5 13.5,2.17157288 13.5,3 L13.5,4.5 C13.5,5.32842712 12.8284271,6 12,6 C11.1715729,6 10.5,5.32842712 10.5,4.5 L10.5,3 C10.5,2.17157288 11.1715729,1.5 12,1.5 Z M12,18 C12.8284271,18 13.5,18.6715729 13.5,19.5 L13.5,21 C13.5,21.8284271 12.8284271,22.5 12,22.5 C11.1715729,22.5 10.5,21.8284271 10.5,21 L10.5,19.5 C10.5,18.6715729 11.1715729,18 12,18 Z M4.81066017,4.81066017 C5.39644661,4.22487373 6.34619408,4.22487373 6.93198052,4.81066017 L7.99264069,5.87132034 C8.57842712,6.45710678 8.57842712,7.40685425 7.99264069,7.99264069 C7.40685425,8.57842712 6.45710678,8.57842712 5.87132034,7.99264069 L4.81066017,6.93198052 C4.22487373,6.34619408 4.22487373,5.39644661 4.81066017,4.81066017 Z M4.81066017,19.2426407 C4.22487373,18.6568542 4.22487373,17.7071068 4.81066017,17.1213203 L5.87132034,16.0606602 C6.45710678,15.4748737 7.40685425,15.4748737 7.99264069,16.0606602 C8.57842712,16.6464466 8.57842712,17.5961941 7.99264069,18.1819805 L6.93198052,19.2426407 C6.34619408,19.8284271 5.39644661,19.8284271 4.81066017,19.2426407 Z"
                      fill="#000000" fill-rule="nonzero" opacity="0.3" />
                  </g>
                </svg><!--end::Svg Icon--></span>
    
            </li>
    
            <li class="search  act1 relative z-30   rounded-md px-4 cursor-pointer flex  py-1 ">
              <span
                class="svg-icon svg-icon-primary svg-icon-2x"><!--begin::Svg Icon | path:/var/www/preview.keenthemes.com/metronic/releases/2021-05-14-112058/theme/html/demo1/dist/../src/media/svg/icons/Weather/Moon.svg--><svg
                  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px"
                  viewBox="0 0 24 24" version="1.1">
                  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <rect x="0" y="0" width="24" height="24" />
                    <path class="fill-[#A1A5B7] duration-300"
                      d="M12.0700837,4.0003006 C11.3895108,5.17692613 11,6.54297551 11,8 C11,12.3948932 14.5439081,15.9620623 18.9299163,15.9996994 C17.5467214,18.3910707 14.9612535,20 12,20 C7.581722,20 4,16.418278 4,12 C4,7.581722 7.581722,4 12,4 C12.0233848,4 12.0467462,4.00010034 12.0700837,4.0003006 Z"
                      fill="#000000" />
                  </g>
                </svg><!--end::Svg Icon--></span>
    
            </li>
          </div>
          <div >
            <div class="flex bg-[#f5f8fa]  justify-between py-16   w-full dark:bg-[#151521] md:justify-around flex-wrap">

            ${Code}
         
        
        </div>
         
                   <div class="  text-right h-full relative bottom-3  dark:bg-[#151521] bg-[#f5f8fa] mb-2"> 
             <button type="button" class="text-gray-900 inline-block h-10    bg-white    focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 copycode">Copy code</button>
</div> <button type="button" id="show_code"
            class="show_code text-white  relative z-30  block cursor-pointer mx-auto bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-5  mb-2 ">Show
            Code</button>
    
          <div class="overflow-hidden  bg-[#f5f8fa] dark:bg-[#151521] text-white duration-500 overflow-y-scroll scrollbar2 dark:scrollbar2dark">
            <textarea readonly class="bg-white codemi"></textarea>
          </div>
    
    
        </div>
    
    
      </div>
    </div>`;

  return retcod;
}

let html = document.documentElement;

if (localStorage.them != undefined) {
  html.className = localStorage.them;
}

// mobile
let toggleSidebarMobile = document.getElementById("toggleSidebarMobile");
let sidebar = document.getElementById("sidebar");
let backgrou = document.getElementById("backgrou");

toggleSidebarMobile.addEventListener("click", () => {
  backgrou.classList.toggle("hidden");
  document.body.classList.toggle("overflow-y-hidden");

  if (window.innerWidth < 500 && window.innerWidth > 300)
    sidebar.style.width = "60%";
  else if (window.innerWidth < 300) sidebar.style.width = "100%";
  else sidebar.style.width = "40%";
});

document.getElementById("error").addEventListener("click", hid);
backgrou.addEventListener("click", hid);

function hid() {
  sidebar.style.width = 0;
  backgrou.classList.toggle("hidden");
  document.body.classList.toggle("overflow-y-hidden");
}
window.onload = () => {
  try {
    let iframall = document.querySelectorAll(".iframall");
    let obj = {};
    for (let i = 0; i < iframall.length; i++) {
      obj[i] = iframall[i].contentDocument.body.children[0].outerHTML;
    }
    localStorage.obj1 = JSON.stringify(obj);
  } catch {
    console.log(1);
  }
  let menu = document.querySelectorAll(".menu");
  let ul = document.querySelectorAll(".men");
  menu.forEach((m) => {
    m.addEventListener("click", show);
  });
  function show(event) {
    menu.forEach((m) => {
      m.style.color = "#9D9DA6";
      m.style.fill = "#9D9DA6";
      try {
        m.children.item(1).children[0].style.rotate = "0deg";
      } catch { }
    });
    ul.forEach((ul) => {
      if (ul.dataset.men == event.target.id && ul.style.height == "0px") {
        event.target.parentElement.style.color = "white";
        event.target.parentElement.style.fill = "white";
        let li = ul.children;
        ul.style.height = `${li[1].clientHeight * li.length}px`;
        try {
          event.target.parentElement.children.item(1).children[0].style.rotate =
            "180deg";
        } catch { }

        for (let i = 0; i < li.length; i++) {
          li[i].addEventListener("click", () => {
            for (let i = 0; i < li.length; i++) {
              li[i].classList.remove("active");
            }
            li[i].classList.add("active");
          });
        }
      } else {
        ul.style.height = 0;
      }
    });
  }
};

let li = document.querySelectorAll(".act1");

let darkquary = window.matchMedia("(prefers-color-scheme:dark)");

let light1 = document.getElementById("light1");
let dark1 = document.getElementById("dark1");

if (html.classList.contains("system")) {
  li.forEach((l) => {
    if (l.dataset.va == "system") {
      l.classList.add("dark:active1");
      l.classList.add("active2");
    }
  });
} else if (html.classList.length == 0) {
  light1.classList.remove("hidden");
  dark1.classList.add("hidden");

  li.forEach((l) => {
    if (l.dataset.va == "light") {
      l.classList.add("dark:active1");
      l.classList.add("active2");
    }
  });
} else {
  li.forEach((l) => {
    if (l.dataset.va == "dark") {
      l.classList.add("dark:active1");
      l.classList.add("active2");
      light1.classList.add("hidden");
      dark1.classList.remove("hidden");
    }
  });
}

li.forEach((l) => {
  l.addEventListener("click", () => {
    if (l.dataset.va != undefined) {
      if (l.dataset.va == "light") {
        html.classList.remove("dark");
        html.classList.remove("system");
        light1.classList.remove("hidden");
        dark1.classList.add("hidden");
      } else if (l.dataset.va == "dark") {
        html.classList.add("dark");
        html.classList.remove("system");
        light1.classList.add("hidden");
        dark1.classList.remove("hidden");
      } else if (darkquary.matches == false) {
        html.classList.remove("dark");
        html.classList.add("system");
        light1.classList.remove("hidden");
        dark1.classList.add("hidden");
      } else {
        html.classList.add("system");
        html.classList.add("dark");
        light1.classList.add("hidden");
        dark1.classList.remove("hidden");
      }

      localStorage.them = html.className;
    }

    li.forEach((li) => {
      li.classList.remove("dark:active1");
      li.classList.remove("active2");
    });
    l.classList.add("dark:active1");
    l.classList.add("active2");
  });
});

// write database

document.getElementById("divall").innerHTML = "";
menudb.forEach((ul) => {
  Writemenu(ul.id, ul.svg, ul.title, ul.li, ul.link);
});

function Writemenu(id, svg, title, li, link) {
  let str1 = "";

  li.forEach((li) => {
    str1 += `<li
                      style="list-style: inside"
                      class="px-5  cursor-pointer  rounded-lg py-[4px] duration-500"
                    >
                      <a href="${li.link}">${li.name}</a>
                    </li>`;
  });

  let str = ` <a>  <div class="my-3">
                  <div
                    class="relative flex justify-between text-[#9D9DA6] menu fill-[#9D9DA6] hover:fill-white hover:text-white cursor-pointer duration-300"
                  >
                    <div class="flex">
                      <h1>
                        ${svg}
                       
                      </h1>
                      <h1 class="pb-1 capitalize text-base font-normal">
                        ${title}
                      </h1>
                    </div>
                    <p class="mt-1 text-center">
                      <svg
                        class="h-3 w-3 duration-500 -rotate-90"
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 320 512"
                      >
                        <!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                        <path
                          d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
                        />
                      </svg>
                    </p>
                    <div
                      id="${id}"
                      class="absolute w-full h-full top-0 left-0 z-30"
                    ></div>
                  </div>
                  <ul
                    data-men="${id}"
                    class="leading-7 xl:text-xs  lg:text-[11px] text-[10px] text-[#9D9DA6] capitalize duration-500 men overflow-hidden"
                  >
                  ${str1}
                  </ul>
                </div>
                
                <a>`;

  document.getElementById("divall").innerHTML += str;
}
