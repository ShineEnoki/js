const bucket = 'golden-horse-assets-dev'
const image = 'https://golden-horse-assets-dev.s3.ap-southeast-1.amazonaws.com/qr-images/qr1.jpg'

const imageGotByAN = 'https://s3.ap-southeast-1.amazonaws.com/golden-horse-assets-dev/qr-images/adm-md94K-o49NS-9PSkc-Pwdjl-1692947824-QxE.png'


const result = image.split(`${bucket}/`)[1];

console.log(result);