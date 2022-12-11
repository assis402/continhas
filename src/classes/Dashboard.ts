export interface HighlightProps {
    total: Number,
    lastTransaction: string
}

export interface DashboardProps {
    income: HighlightProps
    outcome: HighlightProps
    sum: {
        total: Number
    }
}

export const defaultDashboardProps: DashboardProps = {
    income: {
        total: 0,
        lastTransaction: ''
    },
    outcome: {
        total: 0,
        lastTransaction: ''
    },
    sum: {
        total: 0
    }
}