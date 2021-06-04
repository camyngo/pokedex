<template>
  <div id="app">
    <div class="row title">
      <img src="../resources/logo.png" class="title"/>
    </div>

    <div class="row pokeballs">
      <div class="col-md-5 dexball">
        <div class="btn" id="viewDex">
          <img src="../resources/dexball.png" class="pokeball-dex"/>
        </div>
      </div>

      <div class="col-md-2">

      </div>

      <div class="col-md-5 battleball">
        <div class="btn" id="battle">
          <img src="../resources/battleball.png" class="pokeball-battle"/></div>
      </div>
    </div>

    <br>

    <div class="row labels">

      <div class="col-md-5 dexball-label">
        <p>Click the <strong>red Pok&eacute;ball</strong> to view the Original 151 Pok&eacute;dex in all its glory!</p>
      </div>

      <div class="col-md-2">

      </div>

      <div class="col-md-5 battleball-label">
        <p>Click the <strong>purple Master Ball</strong> to jump right into the Pok&eacute;mon Arena!</p>
      </div>

    </div>
    <br/>
    <footer class="footerDeco">
      <div class="credits-footer">
        <p class="credits">Created by <a href="https://github.com/camyngo">Camy Ngo</a></p>
        <p class="legal">I own no copyrighted or trademarked material herein.</p>
        <p>All rights belong to their respective owners.</p>
      </div>
    </footer>

  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
