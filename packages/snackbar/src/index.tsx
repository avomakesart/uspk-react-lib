/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react'
import './snackbar.css'

interface IToastProps {
  toastList: any
  position?: string
  autoDelete?: boolean
  dismissTime?: number
}

export const Toast: React.FC<IToastProps> = ({
  toastList,
  position,
  autoDelete,
  dismissTime,
}) => {
  const [list, setList] = React.useState(toastList)

  React.useEffect(() => {
    setList([...toastList])

    // eslint-disable-next-line
  }, [toastList])

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (autoDelete && toastList.length && list.length) {
        deleteToast(toastList[0].id)
      }
    }, dismissTime)

    return () => {
      clearInterval(interval)
    }

    // eslint-disable-next-line
  }, [toastList, autoDelete, dismissTime, list])

  const deleteToast = (id: string | number) => {
    const listItemIndex = list.findIndex(
      (e: { id: string | number }) => e.id === id,
    )
    const toastListItem = toastList.findIndex(
      (e: { id: string | number }) => e.id === id,
    )
    list.splice(listItemIndex, 1)
    toastList.splice(toastListItem, 1)
    setList([...list])
  }

  return (
    <>
      <div className={`notification-container ${position}`}>
        {list.map(
          (
            toast: {
              backgroundColor: string
              id: string | number
              icon: any
              title: string
              description: string
            },
            i: string | number,
          ) => (
            <div
              key={i}
              className={`notification toast ${position}`}
              style={{ backgroundColor: toast.backgroundColor }}
            >
              <button onClick={() => deleteToast(toast.id)}>X</button>
              <div className="notification-image">
                <img src={toast.icon} alt="" />
              </div>
              <div>
                <p className="notification-title">{toast.title}</p>
                <p className="notification-message">{toast.description}</p>
              </div>
            </div>
          ),
        )}
      </div>
    </>
  )
}
