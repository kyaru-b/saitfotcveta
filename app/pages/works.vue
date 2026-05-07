<script setup lang="ts">
const works = [
  {
    title: 'Кейс 1',
    text: 'Восстановление эстетики фронтального отдела.',
    photos: ['/images/cases/1/photo-01.jpg', '/images/cases/1/photo-02.jpg', '/images/cases/1/photo-03.jpg']
  },
  {
    title: 'Кейс 2',
    text: 'Комплексная работа с зубным рядом и прикусом.',
    photos: ['/images/cases/2/photo-01.jpg', '/images/cases/2/photo-02.jpg', '/images/cases/2/photo-03.jpg', '/images/cases/2/photo-04.jpg']
  },
  {
    title: 'Кейс 3',
    text: 'Фотопротокол лечения с несколькими клиническими этапами.',
    photos: ['/images/cases/3/photo-01.jpg', '/images/cases/3/photo-02.jpg', '/images/cases/3/photo-03.jpg', '/images/cases/3/photo-04.jpg']
  },
  {
    title: 'Кейс 4',
    text: 'Хирургический этап и контроль результата.',
    photos: ['/images/cases/4/photo-01.jpg', '/images/cases/4/photo-02.jpg', '/images/cases/4/photo-03.jpg', '/images/cases/4/photo-04.jpg', '/images/cases/4/photo-05.jpg']
  },
  {
    title: 'Кейс 5',
    text: 'Серия снимков после проведенного лечения.',
    photos: ['/images/cases/5/photo-01.jpg', '/images/cases/5/photo-02.jpg', '/images/cases/5/photo-03.jpg']
  },
  {
    title: 'Кейс 6',
    text: 'Исходная ситуация и клинический результат.',
    photos: ['/images/cases/6/photo-01.jpg', '/images/cases/6/photo-02.jpg']
  },
  {
    title: 'Кейс 7',
    text: 'Финальный фотопротокол лечения.',
    photos: ['/images/cases/7/photo-01.jpg', '/images/cases/7/photo-02.jpg', '/images/cases/7/photo-03.jpg']
  }
]
</script>

<template>
  <main class="min-h-screen overflow-hidden bg-[#f4f8ff] text-[#0f2c33]">
    <div class="pointer-events-none fixed left-[-12%] top-[-12%] h-[520px] w-[520px] rounded-full bg-blue-200/40 blur-3xl" />
    <div class="pointer-events-none fixed bottom-[-16%] right-[-12%] h-[560px] w-[560px] rounded-full bg-cyan-100/70 blur-3xl" />

    <UContainer class="relative max-w-7xl px-6 py-8 md:px-10 lg:px-14">
      <header class="mb-14 flex items-center justify-between rounded-full border border-white/40 bg-white/35 px-4 py-3 backdrop-blur-2xl animate-[fade-up_0.7s_cubic-bezier(0.22,1,0.36,1)_both] sm:px-6">
        <NuxtLink
          to="/"
          class="flex items-center gap-3 text-[#2563eb]"
        >
          <UIcon
            name="i-lucide-arrow-left"
            class="size-5"
          />
          <span class="text-sm font-medium">На главную</span>
        </NuxtLink>

        <div class="text-sm font-medium uppercase tracking-[0.18em] text-[#2563eb]">
          Работы
        </div>
      </header>

      <section class="mb-14 animate-[fade-left_0.8s_cubic-bezier(0.22,1,0.36,1)_both]">
        <p class="text-sm uppercase tracking-[0.25em] text-[#6b7da6]">
          Клинические случаи
        </p>
        <h1 class="mt-4 max-w-4xl text-5xl font-semibold leading-tight text-[#102d34] md:text-7xl">
          Работы и фотопротоколы лечения.
        </h1>
      </section>

      <section class="space-y-12">
        <article
          v-for="(item, index) in works"
          :key="item.title"
          class="border-t border-[#c9e4e6] pt-8 animate-[fade-up_0.75s_cubic-bezier(0.22,1,0.36,1)_both]"
          :style="{ animationDelay: `${index * 0.08}s` }"
        >
          <div class="mb-6 grid gap-4 md:grid-cols-[180px_1fr] md:items-end">
            <div class="text-sm font-medium text-[#2563eb]">
              Кейс {{ String(index + 1).padStart(2, '0') }}
            </div>
            <div>
              <h2 class="text-3xl font-semibold text-[#102d34]">
                {{ item.title }}
              </h2>
              <p class="mt-3 max-w-2xl text-lg leading-8 text-[#5f6f92]">
                {{ item.text }}
              </p>
            </div>
          </div>

          <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <a
              v-for="photo in item.photos"
              :key="photo"
              :href="photo"
              target="_blank"
              class="group block overflow-hidden rounded-[1.25rem] border border-white/60 bg-white/40 shadow-[0_18px_48px_rgba(15,44,51,0.08)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,44,51,0.12)]"
            >
              <img
                :src="photo"
                :alt="`${item.title}: фото работы`"
                class="h-[300px] w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                loading="lazy"
              >
            </a>
          </div>
        </article>
      </section>
    </UContainer>
  </main>
</template>
