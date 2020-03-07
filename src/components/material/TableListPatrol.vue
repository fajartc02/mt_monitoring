<template>
<!-- Text No wrap will be make text no holded in fix contain -->
  <table class="table table-bordered table-dark table-hover my-custom-scrollbar table-wrapper-scroll-y-x text-nowrap" cellspacing="0"
  width="100%">
    <thead>
      <tr style="text-align: center">
        <th scope="col">No</th>
        <th scope="col">Nama</th>
        <th scope="col">Noreg</th>
        <th scope="col">Shift</th>
        <th scope="col">No Polisi</th>
        <th scope="col">Lampu Depan</th>
        <th scope="col">Lampu Belakang</th>
        <th scope="col">Lampu Rem</th>
        <th scope="col">Sen Kanan</th>
        <th scope="col">Sen Kiri</th>
        <th scope="col">Spion Kanan</th>
        <th scope="col">Spion Kiri</th>
        <th scope="col">SIM</th>
        <th scope="col">Asuransi</th>
        <th scope="col">STNK</th>
        <th scope="col">Helm</th>
        <th scope="col">Klakson</th>
        <th scope="col">Sepatu</th>
        <th scope="col">Roda</th>
        <th scope="col">Jas Hujan</th>
        <th scope="col">Spare Lampu Depan</th>
        <th scope="col">Spare Lampu Belakang</th>
        <th scope="col">Note</th>
        <th scope="col">Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr class="center-padding" style="text-align: center; align-items: center">
        <th scope="row">1</th>
        <td>Fajar Tri Cahyono</td>
        <td>1629083</td>
        <td>Non</td>
        <td>T 2110 MR</td>
        <td>OK</td>
        <td>OK</td>
        <td>OK</td>
        <td>OK</td>
        <td>OK</td>
        <td>OK</td>
        <td>OK</td>
        <td>OK</td>
        <td>OK</td>
        <td>OK</td>
        <td>OK</td>
        <td>OK</td>
        <td>OK</td>
        <td>OK</td>
        <td>OK</td>
        <td>OK</td>
        <td>OK</td>
        <td>OK</td>
        <td class="hover-btn">
          <ModalCheck/>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import ModalCheck from './ModalCheck.vue'
export default {
  components: {
    ModalCheck
  }
}
</script>

<style>
.my-custom-scrollbar {
  position: relative;
  height: 600px;
  overflow: auto;
}
.table-wrapper-scroll-y-x {
  display: block;
}
.hover-btn:hover {
  background-color: aquamarine;
}
.center-padding td{
  padding-bottom: 5px
}
</style>
