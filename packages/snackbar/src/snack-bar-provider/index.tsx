/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react'

export const SnackBarContext = React.createContext(undefined)

const AUTO_DISMISS = 5000

export function SnackBarProvider({ children }: any) {
  const [alerts, setAlerts] = React.useState([]) as any

  const activeAlertIds = alerts.join(',')
  React.useEffect(() => {
    if (activeAlertIds.length > 0) {
      const timer = setTimeout(
        () => setAlerts((alerts: any) => alerts.slice(0, alerts.length - 1)),
        AUTO_DISMISS,
      )
      return () => clearTimeout(timer)
    }
  }, [activeAlertIds])

  const addAlert = (alert: any) =>
    setAlerts((alerts: any) => [alert, ...alerts])

  const value = { addAlert } as any

  return (
    <SnackBarContext.Provider value={value}>
      {children}
      {alerts.map((alert: any) => (
        <span key={alert}>{alert}</span>
      ))}
    </SnackBarContext.Provider>
  )
}
