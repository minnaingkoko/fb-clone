<div class="notifications">
    <div class="row">
        <div class="heading">Notifications</div>
        <div class="circle">
            <img class="icon" src="/images/three-dot.svg" alt="">
        </div>
    </div>
    <div class="row-alt">
        <div class="all">All</div>
        <div class="unread">Unread</div>
    </div>
    <div class="anotherRow">
        <div class="heading-alt">New</div>
        <div class="see-all">See all</div>
    </div>
    <div class="noti">
        <div>
            <img src="/images/logo.webp" class="logo" alt="">
        </div>
        <div class="text">
            <div class="noti-text">
                Welcome to Facebook! Tap here<br />to find people you know and add<br />them as friends.
            </div>
            <div class="date">1 day ago</div>
        </div>
        <div class="align">
            <div class="active"></div>
        </div>
    </div>
</div>

<style>
    .notifications {
        @apply w-[360px] h-[calc(100vh_-_74px)] bg-[#ffffff] rounded-lg fixed top-[64px] right-[16px] z-[20];
    }
    .row {
        @apply flex flex-row justify-between;
    }
    .heading {
        @apply text-[24px] font-bold mt-[20px] ml-[16px];
    }
    .circle {
        @apply mt-[20px] mr-[16px] w-[32px] h-[32px] rounded-[50%] flex justify-center items-center cursor-pointer duration-300;
    }
    .circle:hover {
        @apply bg-[#e0e2e7];
    }
    .icon {
        @apply w-[20px] h-[20px] object-cover;
    }
    .row-alt {
        @apply flex flex-row gap-[8px] ml-[16px] mt-[6px];
    }
    .all {
        @apply flex justify-center items-center text-[15px] text-[#1877F2] font-semibold w-[51px] h-[36px] rounded-[50px] bg-[#E7F3FF] cursor-pointer;
    }
    .unread {
        @apply flex justify-center items-center text-[15px] font-semibold w-[75px] h-[36px] rounded-[50px] bg-[#ffffff] cursor-pointer;
    }
    .unread:hover {
        @apply bg-[#e0e2e7];
    }
    .anotherRow {
        @apply flex flex-row mt-[16px] justify-between;
    }
    .heading-alt {
        @apply text-[17px] font-semibold ml-[16px];
    }
    .see-all {
        @apply text-[15px] font-semibold text-[#216FDB] mr-[16px] cursor-pointer;
    }
    .see-all:hover {
        @apply underline;
    }
    .noti {
        @apply relative flex flex-row mt-[8px] w-[344px] h-[111px] ml-[8px] mr-[8px] pt-[12px] pb-[12px] pl-[8px] pr-[8px] cursor-pointer rounded-lg duration-300;
    } 
    .noti:hover {
        @apply bg-[#e0e2e7];
    }
    .logo {
        @apply w-[56px] h-[56px];
    }
    .text {
        @apply flex flex-col ml-[12px];
    }
    .noti-text {
        @apply text-[15px];
    }
    .date {
        @apply text-[13px] text-[#1876F2];
    }
    .align {
        @apply absolute right-[8px] h-[calc(100%_-_24px)] flex items-center;
    }
    .active {
        @apply w-[12px] h-[12px] bg-[#1876F2] rounded-[50%];
    }
</style>