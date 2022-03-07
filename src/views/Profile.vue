<template>
  <div class="register">
    <div class="h-2"></div>
    <div class="container px-3">
      <div class="flex flex-row bg-white rounded-xl shadow-lg">
        <div class="w-2/5 py-4 pl-3 pr-5">
          <img
            src="@/assets/profile/profile-default.png"
            width="150"
            alt="profile-default"
            class="object-cover rounded-full shadow-lg"
          />
        </div>
        <div class="w-3/5 py-4 pr-3 flex flex-col items-start">
          <div class="text-2xl font-bold">Book</div>
          <div class="flex flex-row justify-start w-full mt-1">
            <div class="w-1/4 flex">Major</div>
            <div class="w-3/4 text-ellipsis whitespace-nowrap overflow-hidden">
              Computer Science
            </div>
          </div>
          <div class="flex flex-row justify-start w-full">
            <div class="w-1/4 flex">Name</div>
            <div class="w-3/4 text-ellipsis whitespace-nowrap overflow-hidden">
              Thapanut Saripat
            </div>
          </div>
          <div class="flex flex-row justify-start w-full">
            <div class="w-2/4 flex">Student ID</div>
            <div class="text-ellipsis whitespace-nowrap overflow-hidden">
              07610414
            </div>
          </div>
        </div>
      </div>
      <div
        class="actionBox flex flex-col py-4 px-4 mt-3 bg-white rounded-xl shadow-lg h-full overscroll-auto"
      >
        <div class="customBox">
          <div class="w-full">
            <div
              class="flex w-2/5 items-center justify-center h-8 font-bold bg-secondary text-white rounded-xl"
            >
              Addresss
            </div>
            <div class="py-4 px-4 mt-3 text-left bg-gray rounded-xl">
              <div class="h-20 overflow-y-auto">
                176/284 M.1 T. Makham Tai Surat Thani 84000
              </div>
            </div>
          </div>
          <div class="w-full mt-3">
            <div
              class="flex w-2/5 items-center justify-center font-bold h-8 bg-secondary text-white rounded-xl"
            >
              Achivement
            </div>
            <!-- เพิ่ม overflow xl ด้วย -->
            <div
              class="py-4 px-4 mt-3 h-32 flex flex-row text-left bg-gray rounded-xl"
            >
              <div class="h-24 w-full flex overflow-y-auto">
                <div class="flex flex-col items-center mr-2 w-1/2">
                  <div class="w-1/2 p-3 bg-white rounded-full shadow-lg">
                    <img src="@/assets/achivement/medal.png" />
                  </div>
                  <p class="mt-1 text-xs">เข้าร่วมกิจกรรมครบ 3 ครั้ง</p>
                </div>
                <div class="flex flex-col items-center mr-2 w-1/2">
                  <div class="w-1/2 p-3 bg-white rounded-full shadow-lg">
                    <img src="@/assets/achivement/coins.png" />
                  </div>
                  <p class="mt-1 text-xs">เข้าร่วมกิจกรรมครบ 3 ครั้ง</p>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full mt-3">
            <div
              class="flex w-2/4 items-center justify-center h-8 font-bold bg-secondary text-white rounded-xl"
            >
              Active Workshop
            </div>
            <div class="py-4 px-4 mt-3 text-left bg-gray rounded-xl">
              <div class="action-workshop h-24 overflow-y-auto">
                <div class="action-box pb-3 flex items-center my-3">
                  <div class="box1 text-center text-ellipsis">LINE Chatbot</div>
                  <div class="box2 text-center">22/02/2565 10:00 - 16.30</div>
                  <div class="box3 text-center">3 Points</div>
                </div>
                <div class="action-box pb-3 flex items-center my-3">
                  <div class="box1 text-center text-ellipsis">
                    Java Spring Boot
                  </div>
                  <div class="box2 text-center">22/02/2565 10:00 - 16.30</div>
                  <div class="box3 text-center">3 Points</div>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full mt-3">
            <div
              class="flex w-2/4 items-center justify-center h-8 font-bold bg-secondary text-white rounded-xl"
            >
              History Workshop
            </div>
            <div class="py-4 px-4 mt-3 text-left bg-gray rounded-xl">
              <div class="action-workshop h-24 overflow-y-auto">
                <div class="action-box pb-3 flex items-center my-3">
                  <div class="box1 text-center text-ellipsis">EX10</div>
                  <div class="box2 text-center">22/02/2565 10:00 - 16.30</div>
                  <div class="box3 text-center">3 Points</div>
                </div>
                <div class="action-box pb-3 flex items-center my-3">
                  <div class="box1 text-center text-ellipsis">
                    Design Sticker
                  </div>
                  <div class="box2 text-center">22/02/2565 10:00 - 16.30</div>
                  <div class="box3 text-center">3 Points</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {},
};
</script>
<style lang="scss" scoped>
.register {
  height: 100%;
  min-height: 90vh;
  background: #cbe2e0;
  .actionBox {
    height: 67vh;
    .customBox {
      overflow-y: auto;
      .no-scrollbar::-webkit-scrollbar {
        display: none !important;
      }

      .no-scrollbar {
        -ms-overflow-style: none !important; /* IE and Edge */
        scrollbar-width: none !important; /* Firefox */
      }
      .action-workshop {
        .action-box {
          border-bottom: 1px solid #bbb;
          margin-bottom: -1px;
          // padding-bottom: 10px;
          .box1 {
            width: 35%;
          }
          .box2 {
            width: 40%;
          }
          .box3 {
            width: 25%;
          }
        }
      }
    }
  }
}
</style>
