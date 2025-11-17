<template>
  <section class="testimonials-section" id="reviews">
    <div class="container">
      <h2 class="section-title">Що кажуть <span>наші користувачі</span></h2>

      <div class="slider-wrapper">
        <button v-if="canSlideLeft" class="arrow left" @click="prev">
          <i class="pi pi-chevron-left"></i>
        </button>

        <div
          class="slider-window"
          ref="sliderWindow"
          @touchstart="startDrag"
          @touchmove="onDrag"
          @touchend="endDrag"
          @mousedown="startDrag"
          @mousemove="onDrag"
          @mouseup="endDrag"
          @mouseleave="cancelDrag"
        >
          <div
            class="slider-track"
            :style="{
              transform: `translateX(calc(-${currentIndex * slideWidth}% + ${dragOffset}%))`,
            }"
          >
            <Card v-for="(review, index) in reviews" :key="index" class="review-card">
              <template #content>
                <div class="user-info">
                  <img :src="review.image" class="user-photo" />
                  <div>
                    <h4 class="user-name">{{ review.name }}</h4>
                    <p class="user-role">{{ review.role }}</p>
                  </div>
                </div>

                <p class="review-text">“{{ review.text }}”</p>

                <div class="stars">
                  <i
                    v-for="i in 5"
                    :key="i"
                    class="pi"
                    :class="i <= review.stars ? 'pi-star-fill star-active' : 'pi-star'"
                  ></i>
                </div>
              </template>
            </Card>
          </div>
        </div>

        <button v-if="canSlideRight" class="arrow right" @click="next">
          <i class="pi pi-chevron-right"></i>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import Card from 'primevue/card'

const reviews = [
  {
    name: 'Оксана',
    role: 'Підприємиця',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    text: 'Cleanly Pro — топ. Швидко та дуже зручно!',
    stars: 5,
  },
  {
    name: 'Андрій',
    role: 'Менеджер',
    image: 'https://randomuser.me/api/portraits/men/12.jpg',
    text: 'Командний тариф рятує наш відділ щодня',
    stars: 4,
  },
  {
    name: 'Марина',
    role: 'Дизайнерка',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    text: 'Обожнюю UI, все максимально інтуїтивно',
    stars: 5,
  },
  {
    name: 'Дмитро',
    role: 'HR',
    image: 'https://randomuser.me/api/portraits/men/56.jpg',
    text: 'Сервіс економить час, супер!',
    stars: 5,
  },
  {
    name: 'Світлана',
    role: 'Фрілансер',
    image: 'https://randomuser.me/api/portraits/women/23.jpg',
    text: 'Pro тариф з API — ідеально для інтеграцій.',
    stars: 5,
  },
]

const currentIndex = ref(0)
const visibleCount = ref(1) // mobile
const sliderWindow = ref(null)

if (window.innerWidth >= 768) visibleCount.value = 2
if (window.innerWidth >= 1024) visibleCount.value = 3

const slideWidth = computed(() => 100 / visibleCount.value)

const canSlideLeft = computed(() => currentIndex.value > 0)
const canSlideRight = computed(() => currentIndex.value < reviews.length - visibleCount.value)

const startX = ref(0)
const dragging = ref(false)
const dragOffset = ref(0)

const maxIndex = computed(() => reviews.length - visibleCount.value)

const startDrag = (e) => {
  dragging.value = true
  dragOffset.value = 0
  startX.value = e.touches ? e.touches[0].clientX : e.clientX
}

const onDrag = (e) => {
  if (!dragging.value) return

  const currentX = e.touches ? e.touches[0].clientX : e.clientX
  const deltaX = currentX - startX.value
  let offset = (deltaX / sliderWindow.value.clientWidth) * 100

  if (currentIndex.value === 0 && offset > 0) {
    offset = Math.min(offset, 12)
  }

  if (currentIndex.value === maxIndex.value && offset < 0) {
    offset = Math.max(offset, -12)
  }

  dragOffset.value = offset
}

const endDrag = () => {
  if (!dragging.value) return

  dragging.value = false

  if (Math.abs(dragOffset.value) > 20) {
    if (dragOffset.value < 0 && currentIndex.value < maxIndex.value) {
      currentIndex.value++
    } else if (dragOffset.value > 0 && currentIndex.value > 0) {
      currentIndex.value--
    }
  }

  dragOffset.value = 0
}

const cancelDrag = () => {
  dragging.value = false
  dragOffset.value = 0
}

const next = () => {
  if (canSlideRight.value) currentIndex.value++
}

const prev = () => {
  if (canSlideLeft.value) currentIndex.value--
}
</script>

<style scoped>
.testimonials-section {
  padding: 5rem 1rem;
  background: linear-gradient(180deg, #eef3ff, #ffffff);
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  text-align: center;
}

.section-title {
  font-size: 2.2rem;
  font-weight: 800;
  margin-bottom: 2.5rem;
}
.section-title span {
  color: #2563eb;
}

.slider-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.slider-window {
  overflow: hidden;
  width: 100%;
  cursor: grab;
}

.slider-window:active {
  cursor: grabbing;
}

.slider-track {
  display: flex;
  transition: transform 0.35s ease;
}

.review-card {
  min-width: 100%;
  padding: 1.8rem;
  border-radius: 1.6rem;
  margin: 0 0.2rem;

  background: rgba(255, 255, 255, 0.55);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.4);
  box-shadow: 0 14px 30px rgba(80, 120, 255, 0.15);

  transition: all 0.35s ease;
}

@media (min-width: 768px) {
  .review-card {
    min-width: 50%;
  }
}

@media (min-width: 1024px) {
  .review-card {
    min-width: 33.333%;
  }
}

.user-info {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 12px;
  text-align: left;
}

.user-photo {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
}

.user-name {
  font-weight: 700;
}

.user-role {
  font-size: 0.9rem;
  color: #64748b;
}

.review-text {
  margin: 1rem 0;
  line-height: 1.5;
  text-align: left;
}

.stars {
  display: flex;
  gap: 4px;
}

.star-active {
  color: #facc15;
}

.arrow {
  background: #ffffff;
  border: none;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  box-shadow: 0 6px 20px rgba(150, 170, 255, 0.35);

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  transition: 0.25s ease;
  z-index: 10;
}

.arrow:hover {
  transform: translateY(-50%) scale(1.12);
}

.left {
  left: -10px;
}

.right {
  right: -10px;
}
</style>
