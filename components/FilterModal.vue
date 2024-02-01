<template>
    <div class="filte-modal">
        <div class="filter-modal-bar">
            <button class="close-icon">
                <Icon icon="material-symbols:close" />
            </button>
            <div class="filter-title">
                <h3>Filters</h3>
            </div>
            <button class="clear-button">
                Clear
            </button>
        </div>
        <div class="filter-container">

            <div class="input-box search-inp">
                <label for="search">Search</label>
                <input type="text" id="search" />
            </div>

            <div class="select-box sort-input">
                <label for="sort">Sort</label>
                <select class="select-option" name="" id="sort">
                    <option>Last Ads</option>
                    <option value="newads">New Ads</option>
                    <option value="mosthitads">Most Hid Ads</option>
                    <option value="priceasc">Price: Low to Height</option>
                    <option value="pricedesc">Price: Hight to Low</option>
                </select>
            </div>

            <div class="select-box sort-input">
                <label for="sort">Date</label>
                <select class="select-option" name="date">
                    <option></option>
                    <option value="today">Today</option>
                    <option value="last-7-days">Last 7 Days</option>
                    <option value="last-14-days">Last 14 Days</option>
                    <option value="last-30-days">Last 30 Days</option>
                </select>
            </div>

            <div class="select-box sort-input">
                <label for="province">City/Province</label>
                <select class="" name="province" id="province">
                    <option value=""></option>
                    <option value="phnom-penh">Phnom Penh</option>
                    <option value="preah-sihanouk">Preah Sihanouk</option>
                    <option value="kampong-cham">Kampong Cham</option>
                    <option value="siem-reap">Siem Reap</option>
                    <option value="battambang">Battambang</option>
                    <option value="kandal">Kandal</option>
                    <option value="tboung-khmum">Tboung Khmum</option>
                    <option value="banteay-meanchey">Banteay Meanchey</option>
                    <option value="takeo">Takeo</option>
                    <option value="svay-rieng">Svay Rieng</option>
                    <option value="stung-treng">Stung Treng</option>
                    <option value="ratanakiri">Ratanakiri</option>
                    <option value="pursat">Pursat</option>
                    <option value="prey-veng">Prey Veng</option>
                    <option value="preah-vihear">Preah Vihear</option>
                    <option value="pailin">Pailin</option>
                    <option value="oddar-meanchey">Oddar Meanchey</option>
                    <option value="mondulkiri">Mondulkiri</option>
                    <option value="kratie">Kratie</option>
                    <option value="koh-kong">Koh Kong</option>
                    <option value="kep">Kep</option>
                    <option value="kampot">Kampot</option>
                    <option value="kampong-thom">Kampong Thom</option>
                    <option value="kampong-speu">Kampong Speu</option>
                    <option value="kampong-chhnang">Kampong Chhnang</option>
                </select>
            </div>

            <div class="select-box sort-input ">
                <label for="district">Khan/District</label>
                <select class="disable" name="district" id="district" disabled>
                    <option value=""></option>
                </select>
            </div>

            <div class="select-box sort-input ">
                <label for="commune">Sangkat/Commune</label>
                <select class="disable" name="commune" id="commune" disabled>
                    <option value=""></option>
                </select>
            </div>

            <div class="number-box">
                <div class="min-number-input">
                    <label for="commune">Salary</label>
                    <input type="number" placeholder="Minimum $" />
                </div>
                <div class="max-number-input">
                    <input type="number" placeholder="Maximum $" />
                </div>
            </div>

            <div class="select-box">
                <label for="category">Search</label>
                <select class="" name="category" id="category">
                    <option value=""></option>
                    <option value="jobs-project-management">Project Management</option>
                    <option value="jobs-accounting">Accounting</option>
                    <option value="jobs-management">Management</option>
                    <option value="jobs-manufacturing">Manufacturing</option>
                    <option value="jobs-marketing">Marketing</option>
                    <option value="jobs-media-advertising">Media/Advertising</option>
                    <option value="jobs-medical-health-nursing">Medical/Health/Nursing</option>
                    <option value="jobs-merchandising-purchasing">Merchandising/Purchasing</option>
                    <option value="jobs-operations">Operations</option>
                    <option value="jobs-lawyer-legal-service">Lawyer/Legal Service</option>
                    <option value="jobs-quality-control">Quality Control</option>
                    <option value="jobs-resort-casino">Resort/Casino</option>
                    <option value="jobs-sales">Sales</option>
                    <option value="jobs-security-driver">Security/Driver</option>
                    <option value="jobs-technician">Technician</option>
                    <option value="jobs-telecommunication">Telecommunication</option>
                    <option value="jobs-translation-interpretation">Translation/Interpretation</option>
                    <option value="jobs-travel-agent-ticket-sales">Travel Agent/Ticket Sales</option>
                    <option value="jobs-consultancy">Consultancy</option>
                    <option value="jobs-administration">Administration</option>
                    <option value="jobs-architecture-engineering">Architecture/Engineering</option>
                    <option value="jobs-assistant-secretary">Assistant/Secretary</option>
                    <option value="jobs-audit-taxation">Audit/Taxation</option>
                    <option value="jobs-banking-insurance">Banking/Insurance</option>
                    <option value="jobs-cashier-receptionist">Cashier/Receptionist</option>
                    <option value="jobs-catering-restaurant">Catering/Restaurant</option>
                    <option value="jobs-cleaner-maid">Cleaner/Maid</option>
                    <option value="jobs-information-technology">Information Technology</option>
                    <option value="jobs-customer-service">Customer Service</option>
                    <option value="jobs-design">Design</option>
                    <option value="jobs-education-training">Education/Training</option>
                    <option value="jobs-finance">Finance</option>
                    <option value="jobs-freight-shipping-delivery-warehouse">Freight/Shipping /Delivery/Warehouse</option>
                    <option value="jobs-hotel-hospitality">Hotel/Hospitality</option>
                    <option value="jobs-human-resource">Human Resource</option>
                    <option value="jobs-others">Others</option>
                </select>
            </div>

            <div class="select-box">
                <label for="job-type">Job Type</label>
                <select name="job-type" id="job-type"></select>
            </div>

            <div class="select-box">
                <label for="experiance">Experiance</label>
                <select class="">
                    <option value=""></option>
                    <option value="0">No experience needed</option>
                    <option value="1">1 Year+</option>
                    <option value="2">2 Year+</option>
                    <option value="3">3 Year+</option>
                    <option value="4">4 Year+</option>
                    <option value="5">5 Year+</option>
                    <option value="6">6 Year+</option>
                    <option value="7">7 Year+</option>
                    <option value="8">8 Year+</option>
                    <option value="9">9 Year+</option>
                    <option value="10">10 Year+</option>
                </select>
            </div>

            <div class="radio-box">
                <label for="discount">Discount</label>
                <div class="radio">
                    <input id="s2" type="checkbox" class="switch" checked v-model="discount" />
                    <label for="s2"> {{ discount ? 'Yes' : 'No' }}</label>
                </div>
            </div>
            
            <div class="radio-box">
                <label for="discount">Free Delivery</label>
                <div class="radio">
                    <input id="s2" type="checkbox" class="switch" checked v-model="freeDelivery" />
                    <label for="s2"> {{ freeDelivery ? 'Yes' : 'No' }}</label>
                </div>
            </div>
        </div>
        <button class="apply-filter">
            Apply Filter
        </button>
    </div>
</template>


<script setup>

const discount = ref(false)
const freeDelivery = ref(false)


</script>

<style scoped>


/* @supports(-webkit-appearance: none) or (-moz-appearance: none) {
  input[type='checkbox'],
  input[type='radio'] {
    --active: #275EFE;
    --active-inner: #fff;
    --focus: 2px rgba(39, 94, 254, .3);
    --border: #BBC1E1;
    --border-hover: #275EFE;
    --background: #fff;
    --disabled: #F6F8FF;
    --disabled-inner: #E1E6F9;
    -webkit-appearance: none;
    -moz-appearance: none;
    height: 21px;
    outline: none;
    display: inline-block;
    vertical-align: top;
    position: relative;
    margin: 0;
    cursor: pointer;
    border: 1px solid var(--bc, var(--border));
    background: var(--b, var(--background));
    transition: background .3s, border-color .3s, box-shadow .2s;
    &:after {
      content: '';
      display: block;
      left: 0;
      top: 0;
      position: absolute;
      transition: transform var(--d-t, .3s) var(--d-t-e, ease), opacity var(--d-o, .2s);
    }
    &:checked {
      --b: var(--active);
      --bc: var(--active);
      --d-o: .3s;
      --d-t: .6s;
      --d-t-e: cubic-bezier(.2, .85, .32, 1.2);
    }
    &:disabled {
      --b: var(--disabled);
      cursor: not-allowed;
      opacity: .9;
      &:checked {
        --b: var(--disabled-inner);
        --bc: var(--border);
      }
      & + label {
        cursor: not-allowed;
      }
    }
    &:hover {
      &:not(:checked) {
        &:not(:disabled) {
          --bc: var(--border-hover);
        }
      }
    }
    &:focus {
      box-shadow: 0 0 0 var(--focus);
    }
    &:not(.switch) {
      width: 21px;
      &:after {
        opacity: var(--o, 0);
      }
      &:checked {
        --o: 1;
      }
    }
    & + label {
      font-size: 14px;
      line-height: 21px;
      display: inline-block;
      vertical-align: top;
      cursor: pointer;
      margin-left: 4px;
    }
  }
  input[type='checkbox'] {
    &:not(.switch) {
      border-radius: 7px;
      &:after {
        width: 5px;
        height: 9px;
        border: 2px solid var(--active-inner);
        border-top: 0;
        border-left: 0;
        left: 7px;
        top: 4px;
        transform: rotate(var(--r, 20deg));
      }
      &:checked {
        --r: 43deg;
      }
    }
    &.switch {
      width: 38px;
      border-radius: 11px;
      &:after {
        left: 2px;
        top: 2px;
        border-radius: 50%;
        width: 15px;
        height: 15px;
        background: var(--ab, var(--border));
        transform: translateX(var(--x, 0));
      }
      &:checked {
        --ab: var(--active-inner);
        --x: 17px;
      }
      &:disabled {
        &:not(:checked) {
          &:after {
            opacity: .6;
          }
        }
      }
    }
  }
  input[type='radio'] {
    border-radius: 50%;
    &:after {
      width: 19px;
      height: 19px;
      border-radius: 50%;
      background: var(--active-inner);
      opacity: 0;
      transform: scale(var(--s, .7));
    }
    &:checked {
      --s: .5;
    }
  }
} */

.filte-modal {
    background: whitesmoke;
    width: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 10000;
}

.filter-modal-bar {
    padding: 0 16px;
    background: var(--pr-color);
    height: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white !important;
}

.filter-title {
    flex-grow: 1;
    display: flex;
    justify-content: center;
}

.filter-modal-bar>.close-icon,
.clear-button {
    display: flex;
    align-items: center;
    color: white;
    height: 100%;
    background: transparent;
    border: none;
}

.filter-modal-bar>.close-icon {
    font-size: 32px;
}

.filter-modal-bar>.clear-button {
    font-size: 16px;
}

.filter-container {
    padding-top: 16px;
    max-width: 80%;
    width: 100%;
    /* height: 100vh; */
    /* background-color: #3333; */
}
.radio-box,
.input-box,
.select-box {
    width: 100%;
    display: flex;
    row-gap: 8px;
    flex-direction: column;
    align-items: start;
    margin-bottom: 16px;
}
/* .input-box>input,
.select-box>select,
.min-number-input>input,
.max-number-input>input
 {
    font-size: 16px;
    width: 100%;
    height: 100%;
    padding: 16px;
    border: 1px solid lightgrey;
    border-radius: 4px;
    background-color: white;
    color: black;
} */

.input-box>input:focus,
.input-box>select:focus,
.select-box>select:focus,
.number-box {
    width: 100%;
    display: flex;
    gap: 16px;
    align-items: flex-end;
    margin-bottom: 16px;
}

.min-number-input,
.max-number-input {
    width: 100%;
    gap: 10px;
    display: flex;
    flex-direction: column;
    align-items: baseline;
    ;
}

select:disabled {
    background: #dddddd;
}
.apply-filter {
    position: fixed;
    bottom: 10px;
    font-size: 16px;
    font-weight: bold;
    color: white;
    margin: 0 auto;
    width: 98%;
    background-color: var(--bg-orange);
    border: none;
    border-radius: 4px;
    padding: 16px  8px ;
}

.radio-box > .radio{
    display: flex;
    align-items: center;
    height: 50px;
    width: 100%;
    padding: 8px 16px;
    border-radius: 4px;
    border: 1px solid lightgray;
    
}

</style>