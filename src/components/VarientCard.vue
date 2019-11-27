<template>
    <div v-bind:class="className">
        <h4 class="card__title">{{ name }}</h4>
        <div class="card__icon" v-show="state === states.READY">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                viewBox="0 0 163 163"
            >
                <path
                    class="card__start-icon-path"
                    d="M34.857 3.613C20.084-4.861 8.107 2.081 8.107 19.106v125.637c0 17.042 11.977 23.975 26.75 15.509L144.67 97.275c14.778-8.477 14.778-22.211 0-30.686L34.857 3.613z"
                />
            </svg>
        </div>
        <div class="card__icon" v-show="state === states.WORKING">
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 38 38"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <linearGradient
                        x1="8.042%"
                        y1="0%"
                        x2="65.682%"
                        y2="23.865%"
                        id="a"
                    >
                        <stop stop-color="#fff" stop-opacity="0" offset="0%" />
                        <stop
                            stop-color="#fff"
                            stop-opacity=".631"
                            offset="63.146%"
                        />
                        <stop stop-color="#fff" offset="100%" />
                    </linearGradient>
                </defs>
                <g fill="none" fill-rule="evenodd">
                    <g transform="translate(1 1)">
                        <path
                            d="M36 18c0-9.94-8.06-18-18-18"
                            id="Oval-2"
                            stroke="url(#a)"
                            stroke-width="2"
                        />
                        <circle fill="#fff" cx="36" cy="18" r="1" />
                    </g>
                </g>
            </svg>
        </div>
        <div class="card__icon" v-show="state === states.COMPLETE">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                viewBox="0 0 154 154"
            >
                <g fill="none" stroke="#22AE73" stroke-width="2">
                    <circle
                        cx="77"
                        cy="77"
                        r="72"
                        style="stroke-dasharray:480px, 480px; stroke-dashoffset: 960px;"
                    ></circle>
                    <circle
                        id="colored"
                        fill="#22AE73"
                        cx="77"
                        cy="77"
                        r="72"
                        style="stroke-dasharray:480px, 480px; stroke-dashoffset: 960px;"
                    ></circle>
                    <polyline
                        class="st0"
                        stroke="#fff"
                        stroke-width="10"
                        points="43.5,77.8 63.7,97.9 112.2,49.4 "
                        style="stroke-dasharray:100px, 100px; stroke-dashoffset: 200px;"
                    />
                </g>
            </svg>
        </div>
    </div>
</template>

<style lang="scss">
@import '../lib/sass/mixins';
@import '../lib/sass/colors';

@keyframes spin {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(359deg);
    }
}

@keyframes pulse {
    from {
        background-color: $light-2;
    }
    to {
        background-color: lighten($light-2, 20%);
    }
}

.card {
    display: flex;
    align-items: center;
    justify-content: space-around;
    transition: background-color 0.5s linear;
}

.card--ready {
    cursor: pointer;
    &:hover {
        .card__icon {
            transform: translateX(10px);
        }
    }
}

.card__title {
    font-size: 1.5em;
}

.card__icon {
    appearance: none;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;
    transition: transform 0.3s ease-out;
}

.card--working .card__icon {
    animation: spin 1s linear infinite;
}

.card__start-icon-path {
    fill: white;
}

.card--vanilla {
    background-color: $vanilla;
    color: white;

    &.card--ready:hover {
        background-color: $vanilla-light;
    }
}

.card--working {
    background-color: $light-2;
    animation: pulse 0.5s linear infinite alternate;
}

.card--complete {
    background-color: $complete;
}

.card:nth-child(1) {
    grid-column: 1;
    grid-row: 1;
}
</style>
<script>
const States = {
    READY: 'ready',
    WORKING: 'working',
    COMPLETE: 'complete',
};
export default {
    data: () => ({
        states: States,
        state: States.COMPLETE,
    }),
    props: {
        name: String,
        id: String,
    },
    computed: {
        className: function() {
            return `card card--${this.id} card--${this.state}`;
        },
    },
};
</script>
