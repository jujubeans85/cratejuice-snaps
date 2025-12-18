const drop = document.getElementById('drop');
const fileInput = document.getElementById('file');
const preview = document.getElementById('preview');
const empty = document.getElementById('empty');

function show(file){
  if(!file) return;
  if(!file.type.startsWith('image/')) return alert('Image files only, ya goose 🪿');
  const url = URL.createObjectURL(file);
  preview.innerHTML = `<img src="${url}" alt="Snap preview">`;
  preview.style.display = 'block';
  empty.style.display = 'none';
}

fileInput.addEventListener('change', (e)=> show(e.target.files[0]));

['dragenter','dragover'].forEach(ev=>{
  drop.addEventListener(ev, (e)=>{
    e.preventDefault();
    drop.classList.add('drag');
  });
});

['dragleave','drop'].forEach(ev=>{
  drop.addEventListener(ev, (e)=>{
    e.preventDefault();
    drop.classList.remove('drag');
  });
});

drop.addEventListener('drop', (e)=> show(e.dataTransfer.files[0]));
{
  "id": "uuid",
  "created_at": "2025-03-14T09:32:11",
  "source": "photo",
  "photo": {
    "filename": "IMG_4821.jpg",
    "preview_url": "blob:..."
  },
  "time": {
    "captured": "2024-12-01T16:45:00",
    "confidence": "exif | manual | inferred"
  },
  "place": {
    "label": "Bondi",
    "lat": null,
    "lng": null
  },
  "note": "Late afternoon. Salt on skin. Nothing urgent.",
  "weight": "light | normal | heavy"
}
