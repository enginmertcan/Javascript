// import React, { useState } from "react";

// function Counter() {
//   const [count, setCount] = useState(0);

//   const increment = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={increment}>Arttır</button>
//     </div>
//   );
// }

// export default Counter;  



/* <template>
  <div>
    <h1>{{ count }}</h1>
    <button @click="increment">Arttır</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    };
  },
  methods: {
    increment() {
      this.count++;
    }
  }
};
</script>

<style scoped>
//</style> 
// Template HTML benzeri kod yazılır. state yönetimi için data() kullanılır. methods içerisinde fonksiyonlar tanımlanır. @click="increment"
*/
// React, daha esnek bir yapı sunar ve HTML ile JavaScript'i birleştirir (JSX).
//  Ancak state yönetimi ve lifecycle yönetimi için hook'lara ihtiyaç duyar.


//Vue, daha geleneksel bir yapıda, HTML, CSS ve JavaScript'i daha ayrı tutarak daha net bir yapı sunar.
//  Ayrıca, Vue'nun olay yönetimi ve şablon yapısı genellikle daha kısa ve sade olur.

//Vue: Küçük projelerde yüksek performans sunar ve düşük boyutuyla hızlı yükleme sürelerine katkı sağlar. 
// Ancak çok büyük projelerde React kadar optimize olmayabilir.
// . Ancak projeye hızlıca başlamak ve ihtiyaç duyduğunuz tüm özelliklere sahip olmak isterseniz, Vue size bu kolaylığı sağlar.