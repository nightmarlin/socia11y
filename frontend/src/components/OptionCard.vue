<template>
  <v-card dark>
    <v-card-title>
      Feedback Options
    </v-card-title>
    <v-card-text>

      <v-checkbox
        v-for="criterion in criteria"
        :key="criterion.name"
        :label="criterion.name"
        v-model="criterion.enabled"
      />

      <v-col class="text-left">
        <v-dialog v-model="dialog" width="1000">
          <template v-slot:activator="{ on, attrs }">
            <v-btn light v-bind="attrs" v-on="on">
              Metric Information
            </v-btn>
          </template>

          <v-card>
            <v-card-title>
              Metric Information
            </v-card-title>
            <v-card-text class="text-left">
              <h2>Colour contrast</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed lacus magna. Aenean at lacus volutpat lectus convallis viverra in ac dui. Integer quis nunc sem. Donec turpis mi, sollicitudin vel gravida id, congue id dolor. Aenean vitae tristique nisi. Donec volutpat tincidunt risus, lobortis suscipit diam fringilla vitae. Morbi dolor nunc, interdum vulputate leo in, tincidunt volutpat est. Donec tellus odio, ornare id volutpat ut, hendrerit a eros. Quisque nec magna efficitur, venenatis massa in, ullamcorper ligula. Nulla viverra odio in nisi dictum iaculis. Donec eu sapien tortor. Aliquam quis ligula sit amet nisl convallis feugiat. Vestibulum posuere risus non mauris facilisis rutrum. </p>
              <h2>Colourblindness</h2>
              <p>Cras malesuada nunc a arcu facilisis, at tristique lacus bibendum. In massa mauris, fermentum et sem eget, aliquet cursus diam. Nullam efficitur at leo in placerat. Aliquam cursus scelerisque odio, aliquam feugiat velit dictum tincidunt. Cras fermentum lacus dui, pellentesque tempus quam posuere vel. Aliquam ut urna sed tortor porta rhoncus ac vitae ipsum. Ut magna nisi, molestie eget lacinia vitae, commodo non justo. Aliquam sed arcu eu risus finibus tempor. Cras eros nulla, finibus a enim ut, malesuada aliquet sapien. Ut molestie felis quis enim consectetur, sed ornare neque imperdiet. Nam auctor blandit pellentesque. Suspendisse rutrum erat finibus arcu tristique rutrum. Vivamus ac ipsum massa. Phasellus at rutrum arcu, id blandit augue. Donec facilisis pretium eleifend. </p>
              <h2>Readability</h2>
              <p>Integer id orci vel mi lacinia vehicula sit amet a quam. Nullam sem urna, bibendum nec metus ornare, condimentum egestas felis. Vestibulum ac viverra erat, sit amet dapibus leo. Sed aliquet maximus nibh, imperdiet imperdiet nibh pellentesque a. Suspendisse urna nibh, faucibus at nibh eu, vulputate luctus massa. Cras in quam quis sem faucibus imperdiet. Aenean posuere erat nec erat sollicitudin sollicitudin. </p>
              <h2>Text proportion</h2>
              <p>Vivamus faucibus ligula odio, nec vulputate lorem lobortis non. Aliquam eu diam maximus, ultricies velit non, congue urna. Sed condimentum auctor lobortis. Aenean vitae gravida tortor, eu eleifend ex. Mauris non ipsum interdum, tincidunt velit eu, elementum neque. Pellentesque vitae hendrerit magna. Mauris interdum sed neque et elementum. Fusce leo turpis, dictum vel nibh quis, fringilla ullamcorper ipsum. Aliquam vel mollis tortor, at posuere lorem. </p>
              <h2>Sentence length</h2>
              <p>Integer et risus eros. Suspendisse potenti. Nam semper sodales tempus. Sed fringilla est vel lorem dignissim, vel pulvinar justo porttitor. Integer et ornare neque, euismod malesuada diam. Nunc mollis consequat ante quis aliquam. Quisque vitae rutrum nibh. Nulla a leo quam. Donec erat augue, interdum sit amet tortor in, elementum blandit leo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer congue tellus ut ante congue, id volutpat velit condimentum. Vivamus ac urna massa. Curabitur malesuada quis nisi sed cursus. </p>
              <h2>Word complexity</h2>
              <p>Suspendisse dignissim vel est ut pellentesque. Quisque erat nibh, fringilla sed luctus dapibus, vulputate luctus sapien. Aliquam vel dolor nisi. Proin cursus eu orci eget porta. Mauris non sollicitudin nunc. Cras sodales pretium justo id lobortis. Donec at purus nec sapien fringilla condimentum. Maecenas a metus euismod, lobortis est in, scelerisque lectus. Aliquam a suscipit nulla. Vestibulum id molestie neque, eu imperdiet lorem. Vivamus cursus magna lorem, nec convallis libero ullamcorper vitae. Maecenas ac facilisis odio, rutrum sodales arcu. Praesent rhoncus ex ut scelerisque sagittis. Nam risus justo, facilisis eu purus ut, tristique fermentum dolor. </p>
              <h2>Font type</h2>
              <p>Praesent in vestibulum leo, vel tempor tellus. Aenean a nisl quis sem elementum vehicula sit amet id nisi. Maecenas a erat at nulla vulputate faucibus non sed tortor. Donec ut velit ipsum. Integer blandit elit at tincidunt finibus. Nulla finibus orci at egestas aliquet. Nam consequat non risus sit amet vestibulum. Duis volutpat metus leo, ac pellentesque tellus viverra et. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse efficitur neque et urna congue varius. Quisque enim ligula, faucibus ac consectetur at, sollicitudin sit amet est. Aliquam orci justo, molestie sit amet interdum ac, elementum id ante. Vestibulum rutrum tellus ut ipsum porta congue. Quisque faucibus ligula sed aliquam vulputate. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. </p>
              <h2>Font size</h2>
              <p>Cras dapibus sem nec mattis venenatis. Nullam a vulputate purus, at auctor tellus. Phasellus ultrices efficitur lorem, eget aliquet ligula. Integer hendrerit condimentum magna id ullamcorper. Nullam volutpat velit dui, eget finibus justo rhoncus non. Nulla aliquet lorem ac sapien pulvinar, sed lobortis ante mattis. Aliquam convallis ex quis rutrum eleifend. Morbi dapibus quam quis mauris consequat, vel pulvinar lorem facilisis. Nulla molestie eget mi id hendrerit. Etiam ut ex velit. </p>
            </v-card-text>
          </v-card>
        </v-dialog>
      </v-col>

      <v-col class="text-left">
        <h2>Do you have alt-text/an image description?</h2>
        <v-radio-group column>
          <v-radio label="Yes"></v-radio>
          <v-radio label="No"></v-radio>
        </v-radio-group>
      </v-col>

    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <router-link to="/analysis">
        <v-btn light large @click="onConfirm">Confirm</v-btn>
      </router-link>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";

// let checkboxes: string[] = ["Colour contrast", "Colourblindness"];
let criteria: { name: string; enabled: boolean }[] = [
  { name: "Colour Contrast", enabled: false },
  { name: "Colourblindness", enabled: false },
  { name: "Readbility", enabled: false },
  { name: "Text proportion", enabled: false },
  { name: "Sentence length", enabled: false },
  { name: "Word complexity", enabled: false },
  { name: "Font type", enabled: false },
  { name: "Font size", enabled: false }
];

export default Vue.extend({
  name: "OptionCard",

  data: function() {
    return {
      criteria
    };
  },

  methods: {
    onConfirm: function() {
      console.log(this.criteria);
    }
  }
});
</script>

<style scoped>
.v-btn {
  margin-bottom: 25px;
  margin-top: 25px;
}
</style>
