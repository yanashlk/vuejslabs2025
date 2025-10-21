<template>
  <aside class="w-64 bg-gray-200 min-h-screen p-4">
    <h2 class="text-xl font-bold mb-4">Admin Panel</h2>

    <!-- іменований слот для навігаційних пунктів -->
    <slot name="menu" />

    <div class="mt-6">
      <slot name="footer">
        <!-- футер -->
        <p class="text-gray-500 text-sm">© 2025 Yana</p>
      </slot>
    </div>
  </aside>
</template>
