<template>
    <div class="info-container">
        <section class="infoSection">
            <div class="infoGroup">
                <p>2023 Chevrolet Silverado 1500 LTZ 4x4 Crew Cab...</p>
                <p>VIN: 1F24B148312389010</p>
            </div>
        </section>
        <section class="infoSection">
            <div class="infoGroup">
                <p>Driver: Bob Smith</p>
                <p>Phone: 314-512-5000</p>
                <p>Email: bob.smith@email.com</p>
            </div>
        </section>
        <section class="infoSection">
            <div class="infoGroup">
                <p>Delivery Method: Pick up</p>
                <p>Location: ELCO Chevrolet</p>
                <p>1234 Main St. St. Louis, MO 63105</p>
            </div>
        
        </section>
    </div>
</template>

<style scoped>
.info-container {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    text-align: center;
    width: 50%;
}
.infoGroup {
    padding: .5em;
}
.infoSection {
    display: flex;
    justify-content: space-evenly;
    align-content: space-around;
}
p, address {
    font-size: .8em;
}
</style>