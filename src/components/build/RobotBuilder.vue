<template>
  <div class="content">
    <button class="add-to-cart" @click="addToCart()">Add to Cart</button>
    <div class="top-row">
      <div :class="[saleBorderClass, 'top', 'part']">
        <div class="robot-name">
          {{ selectedRobot.head.title }}
          <span v-if="selectedRobot.head.onSale" class="sale">Sale!</span>
        </div>
        <img :src="selectedRobot.head.src" title="head" />
        <button @click="selectPreviousHead()" class="prev-selector">&#9668;</button>
        <button @click="selectNextHead()" class="next-selector">&#9658;</button>
      </div>
    </div>
    <div class="middle-row">
      <div class="left part">
        <img :src="selectedRobot.leftArm.src" title="left arm" />
        <button @click="selectPreviousLeftArm()" class="prev-selector">&#9668;</button>
        <button @click="selectNextLeftArm()" class="next-selector">&#9658;</button>
      </div>
      <div class="center part">
        <img :src="selectedRobot.torso.src" title="left arm" />
        <button @click="selectPreviousTorsos()" class="prev-selector">&#9668;</button>
        <button @click="selectNextTorsos()" class="next-selector">&#9658;</button>
      </div>
      <div class="right part">
        <img :src="selectedRobot.rightArm.src" title="left arm" />
        <button @click="selectPreviousRightArm()" class="prev-selector">&#9668;</button>
        <button @click="selectNextRightArm()" class="next-selector">&#9658;</button>
      </div>
    </div>
    <div class="bottom-row">
      <div class="bottom part">
        <img :src="selectedRobot.base.src" title="left arm" />
        <button @click="selectPreviousBased()" class="prev-selector">&#9668;</button>
        <button @click="selectNextBases()" class="next-selector">&#9658;</button>
      </div>
    </div>
    <div>
      <h1>Cart</h1>
      <table>
        <thead>
          <tr>
            <th>Robot</th>
            <th class="cost">Cost</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(robot, index) in cart" :key="index">
            <td>{{ robot.head.title }}</td>
            <td class="cost">{{ robot.cost }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import availableParts from '../data/parts';

function getPreviousValidIndex(index, length) {
  const deprecatedIndex = index - 1;
  return deprecatedIndex < 0 ? length - 1 : deprecatedIndex;
}

function getNextValidIndex(index, length) {
  const incrementIndex = index + 1;
  return incrementIndex < 0 ? length - 1 : incrementIndex;
}

export default {
  name: 'RobotBuilder',
  data() {
    return {
      availableParts,
      cart: [],
      selectedHeadIndex: 0,
      selectedRightArmIndex: 0,
      selectedLeftArmIndex: 0,
      selectedTorsosIndex: 0,
      selectedBasesIndex: 0,
    };
  },
  computed: {
    saleBorderClass() {
      return this.selectedRobot.head.onSale ? 'sale-border' : '';
    },
    selectedRobot() {
      return {
        head: this.availableParts.heads[this.selectedHeadIndex],
        rightArm: this.availableParts.arms[this.selectedRightArmIndex],
        leftArm: this.availableParts.arms[this.selectedLeftArmIndex],
        torso: this.availableParts.torsos[this.selectedTorsosIndex],
        base: this.availableParts.bases[this.selectedBasesIndex],
      };
    },
  },
  methods: {
    addToCart() {
      const robot = this.selectedRobot;
      const cost = robot.head.cost
        + robot.rightArm.cost
        + robot.leftArm.cost
        + robot.torso.cost
        + robot.base.cost;
      this.cart.push({ ...robot, cost });
    },
    selectNextHead() {
      this.selectedHeadIndex = getNextValidIndex(
        this.selectedHeadIndex,
        availableParts.heads.length,
      );
    },
    selectPreviousHead() {
      this.selectedHeadIndex = getPreviousValidIndex(
        this.selectedHeadIndex,
        availableParts.heads.length,
      );
    },
    selectNextRightArm() {
      this.selectedRightArmIndex = getNextValidIndex(
        this.selectedRightArmIndex,
        availableParts.arms.length,
      );
    },
    selectPreviousRightArm() {
      this.selectedRightArmIndex = getPreviousValidIndex(
        this.selectedRightArmIndex,
        availableParts.arms.length,
      );
    },
    selectNextLeftArm() {
      this.selectedLeftArmIndex = getNextValidIndex(
        this.selectedLeftArmIndex,
        availableParts.arms.length,
      );
    },
    selectPreviousLeftArm() {
      this.selectedLeftArmIndex = getPreviousValidIndex(
        this.selectedLeftArmIndex,
        availableParts.arms.length,
      );
    },
    selectNextTorsos() {
      this.selectedTorsosIndex = getNextValidIndex(
        this.selectedTorsosIndex,
        availableParts.torsos.length,
      );
    },
    selectPreviousTorsos() {
      this.selectedTorsosIndex = getPreviousValidIndex(
        this.selectedTorsosIndex,
        availableParts.torsos.length,
      );
    },
    selectNextBases() {
      this.selectedBasesIndex = getNextValidIndex(
        this.selectedBasesIndex,
        availableParts.bases.length,
      );
    },
    selectPreviousBases() {
      this.selectedBasesIndex = getPreviousValidIndex(
        this.selectedBasesIndex,
        availableParts.bases.length,
      );
    },
  },
};
</script>

<style scoped>
.part {
  position: relative;
  width: 165px;
  height: 165px;
  border: 3px solid #aaa;
}
.part img {
  width: 165px;
}
.top-row {
  display: flex;
  justify-content: space-around;
}
.middle-row {
  display: flex;
  justify-content: center;
}
.bottom-row {
  display: flex;
  justify-content: space-around;
  border-top: none;
}
.head {
  border-bottom: none;
}
.left {
  border-right: none;
}
.right {
  border-left: none;
}
.left img {
  transform: rotate(-90deg);
}
.right img {
  transform: rotate(90deg);
}
.bottom {
  border-top: none;
}
.prev-selector {
  position: absolute;
  z-index: 1;
  top: -3px;
  left: -28px;
  width: 25px;
  height: 171px;
}
.next-selector {
  position: absolute;
  z-index: 1;
  top: -3px;
  right: -28px;
  width: 25px;
  height: 171px;
}
.center .prev-selector,
.center .next-selector {
  opacity: 0.8;
}
.left .prev-selector {
  top: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.left .next-selector {
  top: auto;
  bottom: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.right .prev-selector {
  top: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  top: auto;
  bottom: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  right: -3px;
}
.robot-name {
  position: absolute;
  top: -75px;
  text-align: center;
  width: 100%;
}
.sale {
  color: red;
}
.content {
  position: relative;
}
.add-to-cart {
  position: absolute;
  right: 30px;
  width: 220px;
  padding: 3px;
  font-size: 16px;
}
th,
td {
  text-align: left;
  padding: 5px;
  padding-right: 20px;
}
.cost {
  text-align: right;
}
.sale-border {
  border: 3px solid red;
}
</style>
