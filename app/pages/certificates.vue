<script setup lang="ts">
const certificates = [
  { title: 'Аккредитация специалиста', image: '/images/certificates/certificate-01.jpg' },
  { title: 'Диплом и профессиональная подготовка', image: '/images/certificates/certificate-02.jpg' },
  { title: 'Сертификат по хирургической стоматологии', image: '/images/certificates/certificate-03.jpg' },
  { title: 'Повышение квалификации', image: '/images/certificates/certificate-04.jpg' },
  { title: 'Профессиональное обучение', image: '/images/certificates/certificate-05.jpg' },
  { title: 'Стоматологическая практика', image: '/images/certificates/certificate-06.jpg' },
  { title: 'Диплом врача', image: '/images/certificates/certificate-07.jpg' },
  { title: 'Сертификат Ankelos', image: '/images/certificates/certificate-08.jpg' },
  { title: 'Сертификат Ankelos', image: '/images/certificates/certificate-09.jpg' },
  { title: 'Сертификат Nobel', image: '/images/certificates/certificate-10.jpg' }
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
          Сертификаты
        </div>
      </header>

      <section class="mb-14 animate-[fade-left_0.8s_cubic-bezier(0.22,1,0.36,1)_both]">
        <p class="text-sm uppercase tracking-[0.25em] text-[#6b7da6]">
          Документы
        </p>
        <h1 class="mt-4 max-w-4xl text-5xl font-semibold leading-tight text-[#102d34] md:text-7xl">
          Дипломы, сертификаты и обучение.
        </h1>
      </section>

      <section class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <a
          v-for="(item, index) in certificates"
          :key="item.image"
          :href="item.image"
          target="_blank"
          class="group overflow-hidden rounded-[1.5rem] border border-white/60 bg-white/50 shadow-[0_18px_48px_rgba(15,44,51,0.08)] backdrop-blur-xl transition duration-300 animate-[fade-up_0.65s_cubic-bezier(0.22,1,0.36,1)_both] hover:-translate-y-1"
          :style="{ animationDelay: `${index * 0.06}s` }"
        >
          <img
            :src="item.image"
            :alt="item.title"
            class="h-[460px] w-full bg-white object-contain p-4 transition duration-700 group-hover:scale-[1.02]"
            loading="lazy"
          >
          <div class="border-t border-[#dbeafe] p-5">
            <div class="mb-2 text-sm text-[#2563eb]">
              {{ String(index + 1).padStart(2, '0') }}
            </div>
            <h2 class="text-lg font-semibold text-[#102d34]">
              {{ item.title }}
            </h2>
          </div>
        </a>
      </section>
    </UContainer>
  </main>
</template>
