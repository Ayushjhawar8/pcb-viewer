import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { PCBViewer } from "../PCBViewer"
import { Circuit } from "@tscircuit/core"
import { MacroKeypad } from "./story-components/MacroKeypad"

export const KeyboardExample: React.FC = () => {
  const circuit = new Circuit()

  circuit.add(
    <board width="10mm" height="10mm">
      <MacroKeypad />
    </board>,
  )

  const soup = circuit.getCircuitJson()

  return (
    <div style={{ backgroundColor: "black" }}>
      <PCBViewer soup={soup} />
    </div>
  )
}

const meta: Meta<typeof KeyboardExample> = {
  title: "Keyboard",
  component: KeyboardExample,
}

export default meta
