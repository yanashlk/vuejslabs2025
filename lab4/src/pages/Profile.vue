<script setup>
import { useI18n } from 'vue-i18n'
import { useForm, useField, useFieldArray, Field } from 'vee-validate'
import { z } from 'zod'
import { toTypedSchema } from '@vee-validate/zod'

const { t } = useI18n()

//схема валідації (локалізовані повідомлення)
const schema = toTypedSchema(
  z.object({
    name: z
      .string()
      .min(2, { message: t('validation.minChars', { min: 2 }) })
      .nonempty({ message: t('validation.required') }),
    email: z
      .string()
      .email({ message: t('validation.email') })
      .nonempty({ message: t('validation.required') }),
    dateOfBirth: z.coerce.date({
      invalid_type_error: t('validation.date'),
      required_error: t('validation.required'),
    }),
    address: z
      .string()
      .min(5, { message: t('validation.minChars', { min: 5 }) })
      .nonempty({ message: t('validation.required') }),
    phones: z
      .array(
        z
          .string()
          .regex(/^\+?[0-9\s\-()]{7,20}$/, { message: t('validation.phone') })
          .nonempty({ message: t('validation.required') }),
      )
      .min(1, { message: t('validation.required') }),
  }),
)

const { handleSubmit, meta, resetForm } = useForm({
  validationSchema: schema,
  validateOnMount: true,
  validateOnChange: true,
  validateOnBlur: true,
  initialValues: {
    name: '',
    email: '',
    dateOfBirth: '',
    address: '',
    phones: [''],
  },
})

const { value: name, errorMessage: nameErr } = useField('name')
const { value: email, errorMessage: emailErr } = useField('email')
const { value: dateOfBirth, errorMessage: dobErr } = useField('dateOfBirth')
const { value: address, errorMessage: addressErr } = useField('address')
const { fields: phoneFields, push, remove } = useFieldArray('phones')

// збереження
const onSubmit = handleSubmit((values) => {
  localStorage.setItem('profile', JSON.stringify(values))
  alert(t('profile.success'))
})

function addPhone() {
  push('')
}
function removePhoneAt(idx) {
  if (phoneFields.value.length > 1) remove(idx)
}
</script>

<template>
  <section>
    <h1>{{ $t('profile.title') }}</h1>

    <form @submit.prevent="onSubmit" novalidate>
      <label>
        {{ $t('profile.name') }}
        <input v-model="name" type="text" autocomplete="name" />
        <small v-if="nameErr">{{ nameErr }}</small>
      </label>

      <label>
        {{ $t('profile.email') }}
        <input v-model="email" type="email" autocomplete="email" />
        <small v-if="emailErr">{{ emailErr }}</small>
      </label>

      <label>
        {{ $t('profile.dateOfBirth') }}
        <input v-model="dateOfBirth" type="date" />
        <small v-if="dobErr">{{ dobErr }}</small>
      </label>

      <label>
        {{ $t('profile.address') }}
        <input v-model="address" type="text" autocomplete="street-address" />
        <small v-if="addressErr">{{ addressErr }}</small>
      </label>

      <div>
        <strong>{{ $t('profile.phones') }}</strong>
        <div
          v-for="(f, idx) in phoneFields"
          :key="f.key"
          style="display: flex; gap: 8px; align-items: center; margin: 6px 0"
        >
          <Field :name="`phones[${idx}]`" v-slot="{ field, errorMessage }">
            <input v-bind="field" type="tel" placeholder="+380..." />
            <small v-if="errorMessage">{{ errorMessage }}</small>
          </Field>
          <button type="button" @click="removePhoneAt(idx)">
            {{ $t('profile.removePhone') }}
          </button>
        </div>
        <button type="button" @click="addPhone">
          {{ $t('profile.addPhone') }}
        </button>
      </div>

      <div style="margin-top: 12px">
        <!--кнопка активна після заповнення всіх полів -->
        <button type="submit" :disabled="!meta.valid || meta.pending">
          {{ $t('profile.submit') }}
        </button>
        <button type="button" @click="resetForm()">
          {{ $t('profile.reset') || 'Скинути зміни' }}
        </button>
      </div>
    </form>
  </section>
</template>

<style scoped>
label {
  display: block;
  margin: 8px 0;
}
input {
  display: block;
  padding: 8px;
  width: 320px;
}
small {
  color: #d33;
}
button {
  cursor: pointer;
}
</style>
