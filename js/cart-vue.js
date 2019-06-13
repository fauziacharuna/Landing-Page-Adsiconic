function motionGraphic() {
  return {
    title: 'Motion Graphic Cart',
    removableOption: [
      { nama: 'Proses Pra-Produksi (ideation)', tarif: 500000 },
      { nama: 'Pembuatan Material Aset', tarif: 750000 },
      { nama: 'Voice Over', tarif: 500000 },
      { nama: 'Animating', tarif: 750000 },
    ],
    fixed: [
      { nama: 'Compositing, Audio, Editing, Rendering', tarif: 500000 },
      { nama: 'Company Fee', tarif: 1500000 },
    ],
    durasi: 1,
  }
}

const cart = new Vue({
  el: '#modalCart',
  data: motionGraphic(),
  computed: {
    subTotal() {
      let removableCost;
      if (this.removableOption.length > 0) {
        removableCost = this.removableOption
          .map(opsi => opsi.tarif)
          .reduce((accumulator, currentValue) => accumulator + currentValue)
      } else {
        removableCost = 0;
      }
      const fixedCost = this.fixed
        .map(opsi => opsi.tarif)
        .reduce((accumulator, currentValue) => accumulator + currentValue)
      return removableCost + fixedCost;
    },
    total() {
      return this.subTotal * this.durasi;
    },
  },
  methods: {
    remove(index) {
      this.removableOption.splice(index, 1);
    },
    reset() {
      Object.assign(this.$data, motionGraphic())
    },
    order() {
      let msg = `Halo, saya mau order ${this.title} dengan spesifikasi ${this.removableOption.map(x => x.nama + ', ')}. Total harga ${this.total}. Terimakasih`;
      msg = encodeURI(msg);
      const payload = `https://wa.me/6281390030856?text=${msg}`;
      window.location.href=payload;
    },
  },
});

function bumperLogo() {
  return {
    title: 'Bumper Logo',
    removableOption: [
      { nama: 'Proses Pra-Produksi (ideation)', tarif: 250000 },
      { nama: 'Pembuatan Material Aset', tarif: 500000 },
      { nama: 'Voice Over', tarif: 250000 },
      { nama: 'Animating', tarif: 500000 },
    ],
    fixed: [
      { nama: 'Compositing, Audio, Editing, Rendering', tarif: 500000 },
      { nama: 'Company Fee', tarif: 1000000 },
    ],
    durasi: 1,
  }
}

const cart2 = new Vue({
  el: '#modalCart2',
  data: bumperLogo(),
  computed: {
    subTotal() {
      let removableCost;
      if (this.removableOption.length > 0) {
        removableCost = this.removableOption
          .map(opsi => opsi.tarif)
          .reduce((accumulator, currentValue) => accumulator + currentValue)
      } else {
        removableCost = 0;
      }
      const fixedCost = this.fixed
        .map(opsi => opsi.tarif)
        .reduce((accumulator, currentValue) => accumulator + currentValue)
      return removableCost + fixedCost;
    },
    total() {
      return this.subTotal * this.durasi;
    },
  },
  methods: {
    remove(index) {
      this.removableOption.splice(index, 1);
    },
    reset() {
      Object.assign(this.$data, bumperLogo())
    },
    order() {
      let msg = `Halo, saya mau order ${this.title} dengan spesifikasi ${this.removableOption.map(x => x.nama + ', ')}. Total harga ${this.total}. Terimakasih`;
      msg = encodeURI(msg);
      const payload = `https://wa.me/6281390030856?text=${msg}`;
      window.location.href=payload;
    },
  },
});

function animasi3d() {
  return {
    title: 'Animasi 3D',
    removableOption: [
      { nama: 'Proses Pra-Produksi (ideation)', tarif: 500000 },
      { nama: 'Pembuatan Material Aset', tarif: 1500000 },
      { nama: 'Voice Over', tarif: 500000 },
      { nama: 'Animating', tarif: 2000000 },
    ],
    fixed: [
      { nama: 'Compositing, Audio, Editing, Rendering', tarif: 1500000 },
      { nama: 'Company Fee', tarif: 3000000 },
    ],
    durasi: 1,
  }
}

const cart3 = new Vue({
  el: '#modalCart3',
  data: animasi3d(),
  computed: {
    subTotal() {
      let removableCost;
      if (this.removableOption.length > 0) {
        removableCost = this.removableOption
          .map(opsi => opsi.tarif)
          .reduce((accumulator, currentValue) => accumulator + currentValue)
      } else {
        removableCost = 0;
      }
      const fixedCost = this.fixed
        .map(opsi => opsi.tarif)
        .reduce((accumulator, currentValue) => accumulator + currentValue)
      return removableCost + fixedCost;
    },
    total() {
      return this.subTotal * this.durasi;
    },
  },
  methods: {
    remove(index) {
      this.removableOption.splice(index, 1);
    },
    reset() {
      Object.assign(this.$data, animasi3d())
    },
    order() {
      let msg = `Halo, saya mau order ${this.title} dengan spesifikasi ${this.removableOption.map(x => x.nama + ', ')}. Total harga ${this.total}. Terimakasih`;
      msg = encodeURI(msg);
      const payload = `https://wa.me/6281390030856?text=${msg}`;
      window.location.href=payload;
    },
  },
});

function liveShot() {
  return {
    title: 'Live Shot',
    fixed: [
      { nama: 'Pra Produksi', tarif: 3000000, tahapan: ['Ideation', 'Pembuatan Naskah', 'Storyboarding', 'Casting Talent', 'Survey Lokasi'] },
      { nama: 'Produksi', tarif: 7000000, tahapan: ['Set Lokasi', 'Pengambilan Gambar', 'Music Scoring & Voice Over'] },
      { nama: 'Pasca Produksi', tarif: 5000000, tahapan: ['Editing Visual', 'Editing Audio', 'Color Grading', 'Rendering'] },
    ],
    durasi: 1,
    maxDurasiBasePrice: 10, 
    penambahanTarifPerMenit: 200000,
  }
}

const cart4 = new Vue({
  el: '#modalCart4',
  data: liveShot(),
  computed: {
    subTotal() {
      const fixedCost = this.fixed
        .map(opsi => opsi.tarif)
        .reduce((accumulator, currentValue) => accumulator + currentValue)
      return fixedCost;
    },
    total() {
      const extraDurasi = this.durasi - this.maxDurasiBasePrice;
      let extraPrice = 0;
      if (extraDurasi > 0) {
        extraPrice = this.penambahanTarifPerMenit * extraDurasi;
      }
      return this.subTotal + extraPrice;
    },
  },
  methods: {
    remove(index) {
      this.removableOption.splice(index, 1);
    },
    reset() {
      Object.assign(this.$data, liveShot())
    },
    order() {
      let msg = `Halo, saya mau order ${this.title} dengan spesifikasi ${this.removableOption.map(x => x.nama + ', ')}. Total harga ${this.total}. Terimakasih`;
      msg = encodeURI(msg);
      const payload = `https://wa.me/6281390030856?text=${msg}`;
      window.location.href=payload;
    },
  },
});