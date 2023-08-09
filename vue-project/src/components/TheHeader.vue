<template>
  <section class="max-w-screen-2xl mt-0 mb-4 mx-auto">
    <!-- begin div -->
    <div class="flex justify-between items-center mb-2">
      <router-link class="w-44 h-44" to="/mainpage"
        ><img src="../../IMG/IMG-Logo/travel-logo.avif" alt="Logo"
      /></router-link>

      <!-- begin div -->
      <div class="flex justify-between items-start gap-20 px-3 w-2/3 h-24">
        <p class="text-2xl font-semibol text-gray-500">Hi! User Name</p>
        <nav class="flex justify-end gap-5">
          <button>Language</button>
          <P>Phone Number</P>
          <a href="#">My order</a>
          <a href="#">Logout</a>
        </nav>
      </div>
      <!-- end div -->
    </div>
    <!-- end div -->

    <!-- begin div -->
    <h1 class="text-center font-bold text-4xl mb-2">
      Welcome to Big Big Holiday
    </h1>
    <div class="flex justify-center gap-6">
      <button>
        <el-icon><DArrowLeft /></el-icon>
      </button>
      <router-link
        class="h-10 w-28 flex justify-center items-center rounded-lg border-2 bg-amber-500 border-amber-500 text-amber-50 hover:bg-amber-100 hover:text-amber-500 hover:border-2 hover:duration-100"
        to="/tourgroup"
        ><el-icon> <Edit /> </el-icon>Tour Group</router-link
      >
      <router-link
        class="h-10 w-28 flex justify-center items-center rounded-lg border-2 bg-amber-500 border-amber-500 text-amber-50 hover:bg-amber-100 hover:text-amber-500 hover:border-2 hover:duration-100 text-center"
        to="/notification"
        ><el-icon><Document /></el-icon>Notification</router-link
      >
      <button>
        <el-icon><DArrowRight /></el-icon>
      </button>
    </div>
    <!-- end div -->
  </section>
</template>
