'use server';

import { redirect } from 'next/navigation';
import { saveMeal } from './meals';
import { revalidatePath } from 'next/cache';

function isInvalidText(text) {
  return !text || text.trim() === '';
}

export async function shareMeal(prevState, formData) {
  const meal = {
    title: formData.get('title'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    image: formData.get('image'),
    creator: formData.get('name'),
    creator_email: formData.get('email'),
  };

  console.log(meal);

  function isInvalidText(text) {
    return !text || text.trim() === '';
  }
  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes('@') ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return {
      message: 'Invalid input.',
    };
  }
  console.log(meal);
  await saveMeal(meal);

  // Fungsi ini memberi tahu NextJS untuk
  //   memvalidasi ulang cache yang termasuk
  // dalam jalur rute tertentu.
  // Jadi, misalnya, jika saya tahu bahwa saya
  // ingin mengunjungi halaman
  // makanan dan halaman makanan bergantung pada data yang berubah sekarang,
  revalidatePath('/meals');

  redirect('/meals');
}
