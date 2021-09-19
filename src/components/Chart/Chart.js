import ChartBar from "./ChartBar"
import "./Chart.css"

const Chart = (props) => {

    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value)
    const totalMax = Math.max(...dataPointValues)

    return (
        <div className="chart">
            {props.dataPoints.map((dataPoint) => (
                <ChartBar
                    key={dataPoint.label} //every chartbar has its own unique label so you can use label against id
                    value={dataPoint.value}
                    maxValue={totalMax}
                    label={dataPoint.label} />
            ))}
        </div>
    )
}

export default Chart
