import Photo from '../assets/galao.png';
import Photo1 from '../assets/garrafa.png';

export function getPhoto(text) {
  let photo;
  switch (text) {
    case 'gallon':
      photo = Photo;
      break;
    case 'bottle':
      photo = Photo1;
      break;
  }
  return photo;
}
