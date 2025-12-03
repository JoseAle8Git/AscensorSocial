<script lang="ts">
    import { onMount } from "svelte";
    import Chart, {
        type ScriptableContext,
        type TooltipItem
    } from "chart.js/auto";
    import { MatrixController, MatrixElement} from 'chartjs-chart-matrix';

    Chart.register(MatrixController, MatrixElement);

    const quintiles = ["0-20", "20-40", "40-60", "60-80", "80-100"];

    type MatrixCell = {
        x: number,
        y: number,
        v: number
    }

    let canvas: HTMLCanvasElement;
    let datosMatrix: any[] = [];

    onMount(async () => {
        const res = await fetch('/api/quintiles');
        const raw: any[] = await res.json();

        datosMatrix = raw.flatMap((row: any, i: number): MatrixCell[] => {
            return quintiles.map((qDest, j) => ({
                x: j,
                y: i,
                v: parseFloat(row[qDest])
            }));
        });

        new Chart(canvas, {
            type: 'matrix',
            data: {
                datasets: [{
                    label: 'Probabilidad (%)',
                    data: datosMatrix,
                    backgroundColor: (ctx: ScriptableContext<'matrix'>) => {
                        const cell = ctx.raw as MatrixCell;
                        const val = cell.v;
                        const alpha = Math.min(1, val / 30);
                        return `rgba(56, 189, 248, ${alpha})`;
                    },
                    borderColor: 'rgba(255,255,255,0.1)',
                    borderWidth: 1,
                    width: (ctx) => {
                        const chart = ctx.chart;
                        if(!chart.chartArea) return 0;
                        return chart.chartArea.width / quintiles.length + 22;
                    },
                    height: (ctx) => {
                        const chart = ctx.chart;
                        if(!chart.chartArea) return 0;
                        return chart.chartArea.height / quintiles.length  + 4;
                    }
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        offset: true,
                        ticks: {
                            callback: (v: string | number): string => {
                                return quintiles[Number(v)] ?? '';
                            },
                            color: '#fff',
                            font: {size:13}
                        },
                        grid: { display: false }
                    },
                    y: {
                        offset: true,
                        ticks: {
                            callback: (v: string | number): string => {
                                return quintiles[Number(v)] ?? '';
                            },
                            color: '#fff',
                            font: {size:13}
                        },
                        grid: { display: false }
                    }
                },
                plugins: {
                    tooltip: {
                        callbacks: {
                            label: (ctx: TooltipItem<'matrix'>) => {
                                const cell = ctx.raw as MatrixCell;
                                const origen = quintiles[cell.y];
                                const destino = quintiles[cell.x];
                                const pct = cell.v.toFixed(1);
                                return `${origen} -> ${destino}: ${pct}%`;
                            }
                        }
                    },
                    legend: { display: false }
                }
            }
        });
    });
</script>

<div class="w-full h-full">
    <canvas bind:this={canvas}></canvas>
</div>