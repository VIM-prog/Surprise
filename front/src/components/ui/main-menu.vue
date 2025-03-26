<template>
<div class="main">
    <ul class="bar">
        <li>
            <a href="/">ГЛАВНАЯ</a>
        </li>
        <li>
            <a href="price">
                ПРАЙС-ЛИСТ
            </a>
        </li>
        <li>
            <a href="projects">
                ПРОЕКТЫ
            </a>
        </li>
        <li>
            <a href="join">
                ПРИСОЕДИНИТЬСЯ
            </a>
        </li>
        <li>
            <a href="about">
                О НАС
            </a>
        </li>
    </ul>
</div>
</template>
<script>
</script>
<style scoped>
.main {
    background-color: black;
    width: 100vw;
    margin: 0 auto;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    user-select: none;
}

.bar {
    display: inline-flex;
    list-style-type: none;
}

li {
    padding: 1rem 2rem;
}

a {
    font-size: 1.3rem;
}
</style>