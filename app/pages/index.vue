<script setup lang="ts">
const certificates = [
  {
    title: 'Диплом врача-стоматолога',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop'
  },
  {
    title: 'Имплантация',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1200&auto=format&fit=crop'
  },
  {
    title: 'Повышение квалификации',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200&auto=format&fit=crop'
  }
]

const principles = [
  'Подробно объясняю весь план лечения',
  'Использую современные методы имплантации',
  'Добиваюсь естественного результата улыбки'
]

const experience = [
  {
    year: '2014',
    title: 'РНИМУ им. Н.И. Пирогова',
    text: 'Высшее медицинское образование по специальности стоматология.'
  },
  {
    year: '2016',
    title: 'Ординатура по терапевтической стоматологии',
    text: 'Специализация в области хирургической стоматологии и имплантации.'
  },
  {
    year: '2017-2026',
    title: 'Частная стоматологическая практика',
    text: 'Практика в области имплантации, удаления сложных зубов и восстановления улыбки.'
  }
]

const works = [
  {
    title: 'Имплантация',
    text: 'Современные имплантационные системы и восстановление утраченных зубов.'
  },
  {
    title: 'Удаление сложных зубов',
    text: 'Атравматичное удаление зубов мудрости и сложных случаев.'
  },
  {
    title: 'All-on-4',
    text: 'Полное восстановление зубного ряда на имплантах.'
  }
]

const nav = [
  { label: 'Обо мне', to: '#about' },
  { label: 'Опыт', to: '#experience' },
  { label: 'Сертификаты', to: '#certificates' },
  { label: 'Работы', to: '#works' }
]
</script>

<template>
  <main class="relative overflow-hidden bg-[#f4f8ff] text-[#0f2c33]">
    <div class="absolute left-[-12%] top-[-8%] h-[560px] w-[560px] rounded-full bg-blue-200/40 blur-3xl" />
    <div class="absolute right-[-14%] top-[22%] h-[640px] w-[640px] rounded-full bg-sky-200/40 blur-3xl" />
    <div class="absolute bottom-[-18%] left-[18%] h-[540px] w-[540px] rounded-full bg-blue-100/70 blur-3xl" />

    <UContainer class="relative max-w-7xl px-6 py-8 md:px-10 lg:px-14">
      <header class="fade-up flex items-center justify-between rounded-full border border-white/40 bg-white/30 px-4 py-3 backdrop-blur-2xl sm:px-6 sm:py-4">
        <NuxtLink
          to="/"
          class="flex items-center gap-3 text-[#2563eb]"
          aria-label="Ислам Гаев"
        >
          <svg
            class="size-6 shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="M8.5 3.5c1.2 0 2.1.6 3.5.6s2.3-.6 3.5-.6c2.4 0 4 2 4 4.7 0 2.1-.8 3.7-1.6 5.2-.9 1.7-1.2 3.8-1.7 5.5-.3 1.1-.9 1.8-1.7 1.8-1.1 0-1.3-1.2-1.8-3.2-.3-1.2-.7-2.1-1.2-2.1s-.9.9-1.2 2.1c-.5 2-.7 3.2-1.8 3.2-.8 0-1.4-.7-1.7-1.8-.5-1.7-.8-3.8-1.7-5.5C4.3 11.9 3.5 10.3 3.5 8.2c0-2.7 1.6-4.7 4-4.7z" />
          </svg>
          <span class="text-xs font-medium tracking-[0.18em] uppercase sm:text-sm">
            Ислам Гаев
          </span>
        </NuxtLink>

        <nav class="hidden items-center gap-8 text-sm text-[#4b5b7a] md:flex">
          <NuxtLink
            v-for="item in nav"
            :key="item.to"
            :to="item.to"
            class="transition hover:text-[#2563eb]"
          >
            {{ item.label }}
          </NuxtLink>
        </nav>

        <UButton
          label="Записаться"
          color="primary"
          class="rounded-full bg-[#2563eb] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#1d4ed8]"
          :ui="{ base: 'cursor-pointer' }"
        />
      </header>

      <section class="relative grid items-center gap-16 py-20 md:grid-cols-[1.05fr_0.95fr] lg:py-32">
        <div class="fade-left">
          <div class="mb-6 inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/30 px-5 py-2 text-sm text-[#2563eb] backdrop-blur-xl">
            <div class="h-2 w-2 rounded-full bg-[#2563eb]" />
            Имплантолог · стоматолог-хирург
          </div>

          <h1 class="max-w-4xl text-5xl font-semibold leading-[0.92] tracking-[-0.055em] text-[#102d34] sm:text-6xl md:text-7xl lg:text-[6.7rem]">
            Имплантация,
            <br>
            хирургия
            <br>
            и естественная
            <br>
            улыбка.
          </h1>

          <p class="mt-8 max-w-2xl text-lg leading-8 text-[#4b676c] md:text-xl">
            Меня зовут Ислам Гаев. Я стоматолог-хирург и имплантолог. Специализируюсь на имплантации, сложных удалениях и восстановлении улыбки с современным цифровым подходом.
          </p>

          <div class="mt-10 flex flex-wrap items-center gap-5">
            <UButton
              label="Записаться на консультацию"
              color="primary"
              size="xl"
              class="rounded-full bg-[#2563eb] px-8 py-4 text-sm font-medium text-white transition hover:scale-[1.02] hover:bg-[#1d4ed8]"
              :ui="{ base: 'cursor-pointer' }"
            />

            <div class="text-sm leading-6 text-[#61708f]">
              <span class="block text-lg font-semibold text-[#102d34]">Имплантология и хирургия</span>
              All-on-4 · имплантация · удаление сложных зубов
            </div>
          </div>
        </div>

        <div class="fade-right relative">
          <div class="absolute -left-10 top-10 z-10 hidden max-w-[230px] rounded-[2rem] border border-white/50 bg-white/35 p-6 text-sm leading-6 text-[#4f5f86] shadow-[0_30px_80px_rgba(0,0,0,0.08)] backdrop-blur-2xl sm:block">
            "Хорошая стоматология - это когда пациент перестает бояться лечения."
          </div>

          <div class="absolute -right-3 bottom-10 z-10 rounded-full border border-white/50 bg-cyan-100/60 px-7 py-5 text-center text-[#2563eb] backdrop-blur-2xl sm:-right-8">
            <div class="text-3xl font-semibold">
              4.9
            </div>
            <div class="text-xs uppercase tracking-[0.18em]">
              rating
            </div>
          </div>

          <div class="overflow-hidden rounded-[3rem] border border-white/40 bg-white/20 p-3 shadow-[0_40px_120px_rgba(0,0,0,0.08)] backdrop-blur-3xl sm:p-4">
            <img
              src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1400&auto=format&fit=crop"
              alt="Ислам Гаев - стоматолог имплантолог"
              class="h-[520px] w-full rounded-[2.5rem] object-cover md:h-[760px]"
            >
          </div>
        </div>
      </section>

      <section
        id="about"
        class="grid gap-16 py-20 md:grid-cols-[0.9fr_1.1fr] lg:py-24"
      >
        <div>
          <p class="text-sm uppercase tracking-[0.25em] text-[#6b7da6]">
            Личный подход
          </p>
          <h2 class="mt-4 text-4xl font-semibold tracking-[-0.04em] text-[#102d34] md:text-5xl">
            Современная хирургическая стоматология с понятным подходом.
          </h2>
        </div>

        <div class="space-y-10">
          <p class="text-2xl leading-10 tracking-[-0.03em] text-[#334e7d]">
            Для меня важно, чтобы пациент чувствовал спокойствие и понимал весь процесс лечения. Я подробно объясняю план, показываю варианты восстановления и подбираю решение, которое будет комфортным и долговечным.
          </p>

          <div class="grid gap-4">
            <div
              v-for="(item, index) in principles"
              :key="item"
              class="flex items-center gap-5 border-t border-[#c9e4e6] py-5"
            >
              <span class="text-sm text-[#2563eb]">0{{ index + 1 }}</span>
              <span class="text-lg text-[#61708f]">{{ item }}</span>
            </div>
          </div>
        </div>
      </section>

      <section
        id="experience"
        class="grid gap-16 py-20 md:grid-cols-[0.7fr_1.3fr] lg:py-24"
      >
        <div>
          <p class="text-sm uppercase tracking-[0.25em] text-[#6b7da6]">
            Опыт и образование
          </p>
          <h2 class="mt-4 text-4xl font-semibold tracking-[-0.04em] text-[#102d34] md:text-5xl">
            Опыт в хирургии и имплантации.
          </h2>
        </div>

        <div class="space-y-14">
          <div
            v-for="item in experience"
            :key="item.title"
            class="flex gap-8"
          >
            <div class="min-w-[96px] text-sm font-medium text-[#2563eb] sm:min-w-[110px]">
              {{ item.year }}
            </div>
            <div>
              <h3 class="text-2xl font-semibold tracking-[-0.03em] text-[#102d34]">
                {{ item.title }}
              </h3>
              <p class="mt-3 max-w-2xl text-lg leading-8 text-[#5f6f92]">
                {{ item.text }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="certificates"
        class="py-20 lg:py-24"
      >
        <div class="mb-16 flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
          <div>
            <p class="text-sm uppercase tracking-[0.25em] text-[#6b7da6]">
              Сертификаты
            </p>
            <h2 class="mt-4 text-4xl font-semibold tracking-[-0.04em] text-[#102d34] md:text-5xl">
              Сертификаты и профессиональное обучение.
            </h2>
          </div>
          <p class="max-w-xl text-lg leading-8 text-[#5f6f92]">
            Курсы повышения квалификации, обучение имплантологии и хирургическим методикам.
          </p>
        </div>

        <div class="grid gap-8 md:grid-cols-3">
          <UCard
            v-for="(item, index) in certificates"
            :key="item.title"
            class="group relative overflow-hidden rounded-[2.5rem] border-0 bg-transparent p-0 ring-0 transition duration-300 hover:-translate-y-2"
            :ui="{ body: 'p-0 sm:p-0' }"
          >
            <img
              :src="item.image"
              :alt="item.title"
              class="h-[520px] w-full object-cover transition duration-700 group-hover:scale-105"
            >
            <div class="absolute inset-0 bg-gradient-to-t from-[#071b20]/80 via-transparent to-transparent" />
            <div class="absolute bottom-0 left-0 right-0 p-8 text-white">
              <div class="mb-4 text-sm text-white/60">
                0{{ index + 1 }}
              </div>
              <h3 class="text-2xl font-semibold tracking-[-0.03em]">
                {{ item.title }}
              </h3>
            </div>
          </UCard>
        </div>
      </section>

      <section
        id="works"
        class="py-20 lg:py-24"
      >
        <div class="mb-16">
          <p class="text-sm uppercase tracking-[0.25em] text-[#6b7da6]">
            Направления работы
          </p>
          <h2 class="mt-4 text-4xl font-semibold tracking-[-0.04em] text-[#102d34] md:text-5xl">
            Основные процедуры и специализация.
          </h2>
        </div>

        <div class="grid gap-8 md:grid-cols-3">
          <UCard
            v-for="(item, index) in works"
            :key="item.title"
            class="relative overflow-hidden rounded-[2.5rem] border border-white/40 bg-white/30 p-10 backdrop-blur-2xl ring-0"
            :ui="{ body: 'p-0 sm:p-0' }"
          >
            <div class="absolute right-0 top-0 h-40 w-40 rounded-full bg-cyan-100/50 blur-3xl" />
            <div class="relative">
              <div class="mb-10 text-6xl font-light tracking-[-0.06em] text-[#c7d7ff]">
                0{{ index + 1 }}
              </div>
              <h3 class="text-3xl font-semibold tracking-[-0.03em] text-[#102d34]">
                {{ item.title }}
              </h3>
              <p class="mt-5 text-lg leading-8 text-[#5f6f92]">
                {{ item.text }}
              </p>
            </div>
          </UCard>
        </div>
      </section>

      <footer class="py-20">
        <div class="overflow-hidden rounded-[3rem] border border-white/40 bg-[#2563eb] px-6 py-14 text-white shadow-[0_40px_120px_rgba(12,109,114,0.35)] sm:px-10 sm:py-16">
          <div class="grid gap-12 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p class="text-sm uppercase tracking-[0.25em] text-cyan-100/70">
                Консультация врача
              </p>
              <h2 class="mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.04em] md:text-5xl">
                Запишитесь на прием и получите персональный план лечения.
              </h2>
            </div>
            <UButton
              label="Написать врачу"
              color="neutral"
              size="xl"
              class="rounded-full bg-white px-8 py-4 text-sm font-medium text-[#2563eb] transition hover:scale-[1.03]"
              :ui="{ base: 'cursor-pointer' }"
            />
          </div>

          <div class="mt-16 flex flex-col gap-5 border-t border-white/10 pt-8 text-sm text-cyan-50/70 md:flex-row md:items-center md:justify-between">
            <div class="flex items-center gap-3">
              <UIcon
                name="i-lucide-phone"
                class="size-[18px]"
              />
              +7 999 123-45-67
            </div>
            <div>Ислам Гаев · стоматолог-хирург</div>
            <div>Пн-Сб · 09:00-19:00</div>
          </div>
        </div>
      </footer>
    </UContainer>
  </main>
</template>
