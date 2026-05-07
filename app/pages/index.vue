<script setup lang="ts">
import { onMounted, ref } from 'vue'

const isLoading = ref(true)

onMounted(() => {
  window.setTimeout(() => {
    isLoading.value = false
  }, 950)
})

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

const principles = [
  'Подробно объясняю план лечения и показываю этапы на снимках',
  'Работаю с имплантацией, хирургией и восстановлением улыбки',
  'Внимательно веду пациента от консультации до финального результата'
]

const experience = [
  {
    year: '2014',
    title: 'Медицинское образование',
    text: 'Базовая подготовка по стоматологии и дальнейшая специализация в хирургическом направлении.'
  },
  {
    year: '2016',
    title: 'Хирургическая стоматология',
    text: 'Практика сложных удалений, имплантации и подготовки пациентов к ортопедическому лечению.'
  },
  {
    year: '2017-2026',
    title: 'Частная стоматологическая практика',
    text: 'Клинические случаи, восстановление зубного ряда и комплексное планирование лечения.'
  }
]

const works = [
  {
    title: 'Кейс 1',
    text: 'Восстановление эстетики фронтального отдела.',
    photos: [
      '/images/cases/1/photo-01.jpg',
      '/images/cases/1/photo-02.jpg',
      '/images/cases/1/photo-03.jpg'
    ]
  },
  {
    title: 'Кейс 2',
    text: 'Комплексная работа с зубным рядом и прикусом.',
    photos: [
      '/images/cases/2/photo-01.jpg',
      '/images/cases/2/photo-02.jpg',
      '/images/cases/2/photo-03.jpg',
      '/images/cases/2/photo-04.jpg'
    ]
  },
  {
    title: 'Кейс 3',
    text: 'Фотопротокол лечения с несколькими клиническими этапами.',
    photos: [
      '/images/cases/3/photo-01.jpg',
      '/images/cases/3/photo-02.jpg',
      '/images/cases/3/photo-03.jpg',
      '/images/cases/3/photo-04.jpg'
    ]
  },
  {
    title: 'Кейс 4',
    text: 'Хирургический этап и контроль результата.',
    photos: [
      '/images/cases/4/photo-01.jpg',
      '/images/cases/4/photo-02.jpg',
      '/images/cases/4/photo-03.jpg',
      '/images/cases/4/photo-04.jpg',
      '/images/cases/4/photo-05.jpg'
    ]
  },
  {
    title: 'Кейс 5',
    text: 'Серия снимков после проведенного лечения.',
    photos: [
      '/images/cases/5/photo-01.jpg',
      '/images/cases/5/photo-02.jpg',
      '/images/cases/5/photo-03.jpg'
    ]
  },
  {
    title: 'Кейс 6',
    text: 'Исходная ситуация и клинический результат.',
    photos: [
      '/images/cases/6/photo-01.jpg',
      '/images/cases/6/photo-02.jpg'
    ]
  },
  {
    title: 'Кейс 7',
    text: 'Финальный фотопротокол лечения.',
    photos: [
      '/images/cases/7/photo-01.jpg',
      '/images/cases/7/photo-02.jpg',
      '/images/cases/7/photo-03.jpg'
    ]
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
  <div>
    <Transition
      enter-active-class="transition duration-500 ease-out"
      leave-active-class="transition duration-700 ease-in-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isLoading"
        class="fixed inset-0 z-50 grid place-items-center overflow-hidden bg-[#f4f8ff]"
      >
        <div class="absolute left-[-10%] top-[-18%] h-[420px] w-[420px] rounded-full bg-blue-200/50 blur-3xl animate-[pulse_2.6s_ease-in-out_infinite]" />
        <div class="absolute bottom-[-16%] right-[-12%] h-[480px] w-[480px] rounded-full bg-cyan-100/80 blur-3xl animate-[pulse_3.1s_ease-in-out_infinite]" />
        <div class="absolute left-[45%] top-[22%] h-[260px] w-[260px] rounded-full bg-emerald-100/70 blur-3xl animate-[pulse_2.8s_ease-in-out_infinite]" />

        <div class="relative flex flex-col items-center gap-7 text-center animate-[fade-up_0.7s_cubic-bezier(0.22,1,0.36,1)_both]">
          <div class="relative grid size-24 place-items-center">
            <div class="absolute inset-0 rounded-full border border-white/70 bg-white/35 shadow-[0_30px_90px_rgba(37,99,235,0.16)] backdrop-blur-2xl" />
            <div class="absolute inset-2 rounded-full border-2 border-[#bfdbfe]" />
            <div class="absolute inset-2 rounded-full border-2 border-transparent border-t-[#2563eb] animate-spin" />
            <UIcon
              name="i-ph-tooth-fill"
              class="relative size-9 text-[#2563eb]"
            />
          </div>

          <div>
            <p class="text-sm font-medium uppercase tracking-[0.24em] text-[#2563eb]">
              Ислам Гаев
            </p>
            <p class="mt-3 text-lg text-[#4b676c]">
              Подготавливаем страницу
            </p>
          </div>

          <div class="h-1.5 w-56 overflow-hidden rounded-full bg-white/70">
            <div class="h-full w-1/2 rounded-full bg-[#2563eb] animate-[loader-bar_1.05s_ease-in-out_infinite]" />
          </div>
        </div>
      </div>
    </Transition>

    <main
      v-if="!isLoading"
      class="relative overflow-hidden bg-[#f4f8ff] text-[#0f2c33] animate-[page-in_0.7s_cubic-bezier(0.22,1,0.36,1)_both]"
    >
      <div class="absolute left-[-12%] top-[-8%] h-[560px] w-[560px] rounded-full bg-blue-200/40 blur-3xl" />
      <div class="absolute right-[-14%] top-[22%] h-[640px] w-[640px] rounded-full bg-emerald-100/60 blur-3xl" />
      <div class="absolute bottom-[-18%] left-[18%] h-[540px] w-[540px] rounded-full bg-cyan-100/70 blur-3xl" />

      <UContainer class="relative max-w-7xl px-6 py-8 md:px-10 lg:px-14">
        <header class="flex items-center justify-between rounded-full border border-white/40 bg-white/30 px-4 py-3 backdrop-blur-2xl animate-[fade-up_0.7s_cubic-bezier(0.22,1,0.36,1)_both] sm:px-6 sm:py-4">
          <NuxtLink
            to="/"
            class="flex items-center gap-3 text-[#2563eb]"
            aria-label="Ислам Гаев"
          >
            <UIcon
              name="i-ph-tooth-fill"
              class="size-6 shrink-0"
            />
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
          <div class="animate-[fade-left_0.85s_cubic-bezier(0.22,1,0.36,1)_0.1s_both]">
            <div class="mb-6 inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/30 px-5 py-2 text-sm text-[#2563eb] backdrop-blur-xl">
              <div class="h-2 w-2 rounded-full bg-[#2563eb]" />
              Имплантолог · стоматолог-хирург
            </div>

            <h1 class="max-w-4xl text-5xl font-semibold leading-[0.96] text-[#102d34] sm:text-6xl md:text-7xl lg:text-[6.4rem]">
              <span class="block">Имплантация,</span>
              <span class="block">хирургия</span>
              <span class="mt-6 flex items-center gap-4 sm:mt-7 md:mt-8">
                <span class="h-px w-10 bg-[#8ec5d0] sm:w-14 md:w-16" />
                <span class="grid size-10 place-items-center rounded-full border border-[#b8dfe6] bg-white/45 text-[0.34em] leading-none text-[#2563eb] backdrop-blur-xl sm:size-12">
                  и
                </span>
                <span class="text-[0.68em] font-medium leading-[0.92] text-[#2563eb]">
                  Естественная улыбка.
                </span>
              </span>
            </h1>

            <p class="mt-8 max-w-2xl text-lg leading-8 text-[#4b676c] md:text-xl">
              Меня зовут Ислам Гаев. Я стоматолог-хирург и имплантолог. Специализируюсь на имплантации, сложных удалениях и восстановлении улыбки с понятным планом лечения.
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

          <div class="relative animate-[fade-right_0.85s_cubic-bezier(0.22,1,0.36,1)_0.2s_both]">
            <div class="absolute -right-3 bottom-10 z-10 rounded-full border border-white/50 bg-cyan-100/70 px-7 py-5 text-center text-[#2563eb] backdrop-blur-2xl sm:-right-8">
              <div class="text-3xl font-semibold">
                4.9
              </div>
              <div class="text-xs uppercase tracking-[0.18em]">
                оценка
              </div>
            </div>

            <div class="overflow-hidden rounded-[3rem] border border-white/40 bg-white/20 p-3 shadow-[0_40px_120px_rgba(0,0,0,0.08)] backdrop-blur-3xl sm:p-4">
              <img
                src="/images/doctor/doctor.jpg"
                alt="Врач Ислам Гаев"
                class="h-[520px] w-full rounded-[2.5rem] object-cover object-top md:h-[760px]"
              >
            </div>
          </div>
        </section>

        <section
          id="about"
          class="grid gap-16 py-20 animate-[fade-up_0.8s_cubic-bezier(0.22,1,0.36,1)_0.25s_both] md:grid-cols-[0.9fr_1.1fr] lg:py-24"
        >
          <div>
            <p class="text-sm uppercase tracking-[0.25em] text-[#6b7da6]">
              Личный подход
            </p>
            <h2 class="mt-4 text-4xl font-semibold text-[#102d34] md:text-5xl">
              Современная хирургическая стоматология с понятным подходом.
            </h2>
          </div>

          <div class="space-y-10">
            <p class="text-2xl leading-10 text-[#334e7d]">
              Для меня важно, чтобы пациент чувствовал спокойствие и понимал весь процесс лечения. Я подробно объясняю план, показываю варианты восстановления и подбираю решение, которое будет комфортным и долговечным.
            </p>

            <div class="grid gap-4">
              <div
                v-for="(item, index) in principles"
                :key="item"
                class="flex items-center gap-5 border-t border-[#c9e4e6] py-5 animate-[fade-up_0.65s_cubic-bezier(0.22,1,0.36,1)_both]"
                :style="{ animationDelay: `${0.35 + index * 0.08}s` }"
              >
                <span class="text-sm text-[#2563eb]">0{{ index + 1 }}</span>
                <span class="text-lg text-[#61708f]">{{ item }}</span>
              </div>
            </div>
          </div>
        </section>

        <section
          id="experience"
          class="grid gap-16 py-20 animate-[fade-up_0.8s_cubic-bezier(0.22,1,0.36,1)_0.3s_both] md:grid-cols-[0.7fr_1.3fr] lg:py-24"
        >
          <div>
            <p class="text-sm uppercase tracking-[0.25em] text-[#6b7da6]">
              Опыт и образование
            </p>
            <h2 class="mt-4 text-4xl font-semibold text-[#102d34] md:text-5xl">
              Опыт в хирургии, имплантации и комплексном лечении.
            </h2>
          </div>

          <div class="space-y-14">
            <div
              v-for="(item, index) in experience"
              :key="item.title"
              class="flex gap-8 animate-[fade-left_0.7s_cubic-bezier(0.22,1,0.36,1)_both]"
              :style="{ animationDelay: `${0.25 + index * 0.1}s` }"
            >
              <div class="min-w-[96px] text-sm font-medium text-[#2563eb] sm:min-w-[110px]">
                {{ item.year }}
              </div>
              <div>
                <h3 class="text-2xl font-semibold text-[#102d34]">
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
          class="py-20 animate-[fade-up_0.8s_cubic-bezier(0.22,1,0.36,1)_0.35s_both] lg:py-24"
        >
          <div class="mb-16 flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
            <div>
              <p class="text-sm uppercase tracking-[0.25em] text-[#6b7da6]">
                Сертификаты
              </p>
              <h2 class="mt-4 text-4xl font-semibold text-[#102d34] md:text-5xl">
                Дипломы, сертификаты и профессиональное обучение.
              </h2>
            </div>
            <p class="max-w-xl text-lg leading-8 text-[#5f6f92]">
              Документы из папки data размещены локально в public и подключены как часть страницы.
            </p>
          </div>

          <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <UCard
              v-for="(item, index) in certificates.slice(0, 3)"
              :key="item.image"
              class="group relative overflow-hidden rounded-[1.5rem] border border-white/60 bg-white/45 p-0 ring-0 transition duration-300 animate-[fade-up_0.65s_cubic-bezier(0.22,1,0.36,1)_both] hover:-translate-y-1"
              :style="{ animationDelay: `${0.08 * index}s` }"
              :ui="{ body: 'p-0 sm:p-0' }"
            >
              <img
                :src="item.image"
                :alt="item.title"
                class="h-[420px] w-full bg-white object-contain p-4 transition duration-700 group-hover:scale-[1.02]"
                loading="lazy"
              >
              <div class="border-t border-[#dbeafe] p-5">
                <div class="mb-2 text-sm text-[#2563eb]">
                  0{{ index + 1 }}
                </div>
                <h3 class="text-lg font-semibold text-[#102d34]">
                  {{ item.title }}
                </h3>
              </div>
            </UCard>
          </div>

          <div class="mt-10 flex justify-center">
            <UButton
              to="/certificates"
              label="Смотреть все сертификаты"
              color="primary"
              variant="outline"
              size="xl"
              trailing-icon="i-lucide-arrow-right"
              class="rounded-full border-[#2563eb] px-7 py-3 text-[#2563eb]"
            />
          </div>
        </section>

        <section
          id="works"
          class="py-20 animate-[fade-up_0.8s_cubic-bezier(0.22,1,0.36,1)_0.4s_both] lg:py-24"
        >
          <div class="mb-16">
            <p class="text-sm uppercase tracking-[0.25em] text-[#6b7da6]">
              Работы
            </p>
            <h2 class="mt-4 text-4xl font-semibold text-[#102d34] md:text-5xl">
              Клинические случаи и фотопротоколы лечения.
            </h2>
          </div>

          <div class="space-y-12">
            <section
              v-for="(item, index) in works.slice(0, 3)"
              :key="item.title"
              class="border-t border-[#c9e4e6] pt-8 animate-[fade-up_0.75s_cubic-bezier(0.22,1,0.36,1)_both]"
              :style="{ animationDelay: `${0.1 * index}s` }"
            >
              <div class="mb-6 grid gap-4 md:grid-cols-[220px_1fr] md:items-end">
                <div class="text-sm font-medium text-[#2563eb]">
                  Кейс 0{{ index + 1 }}
                </div>
                <div>
                  <h3 class="text-3xl font-semibold text-[#102d34]">
                    {{ item.title }}
                  </h3>
                  <p class="mt-3 max-w-2xl text-lg leading-8 text-[#5f6f92]">
                    {{ item.text }}
                  </p>
                </div>
              </div>

              <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <img
                  v-for="photo in item.photos.slice(0, 1)"
                  :key="photo"
                  :src="photo"
                  :alt="`${item.title}: фото работы`"
                  class="h-[280px] w-full rounded-[1.25rem] border border-white/60 bg-white/40 object-cover shadow-[0_18px_48px_rgba(15,44,51,0.08)] transition duration-500 animate-[fade-up_0.65s_cubic-bezier(0.22,1,0.36,1)_both] hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,44,51,0.12)]"
                  loading="lazy"
                >
              </div>
            </section>
          </div>

          <div class="mt-10 flex justify-center">
            <UButton
              to="/works"
              label="Смотреть все работы"
              color="primary"
              variant="outline"
              size="xl"
              trailing-icon="i-lucide-arrow-right"
              class="rounded-full border-[#2563eb] px-7 py-3 text-[#2563eb]"
            />
          </div>
        </section>

        <footer class="py-20 animate-[fade-up_0.8s_cubic-bezier(0.22,1,0.36,1)_0.45s_both]">
          <div class="overflow-hidden rounded-[3rem] border border-white/40 bg-[#2563eb] px-6 py-14 text-white shadow-[0_40px_120px_rgba(12,109,114,0.35)] sm:px-10 sm:py-16">
            <div class="grid gap-12 md:grid-cols-[1fr_auto] md:items-end">
              <div>
                <p class="text-sm uppercase tracking-[0.25em] text-cyan-100/70">
                  Консультация врача
                </p>
                <h2 class="mt-5 max-w-3xl text-4xl font-semibold leading-tight md:text-5xl">
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
  </div>
</template>
