import * as React from 'react'
import { littleArrowUp, littleArrowDown, trash } from '../../resources'
import { action } from 'mobx'
import { observer } from 'mobx-react'
import { IItem } from '../../App.interface'

export interface IOrderItemProps extends IItem {
  count: number
  addCount?: (item: IOrderItemProps) => void
  removeCount?: (item: IOrderItemProps) => void
  removeItem?: (item: IOrderItemProps) => void
}

@observer
export class OrderItem extends React.Component<IOrderItemProps> {
  @action.bound
  private onClickAddCount() {
    if (this.props.addCount) {
      this.props.addCount(this.props)
    }
  }

  @action.bound
  private onClickRemoveCount() {
    if (this.props.removeCount) {
      this.props.removeCount(this.props)
    }
  }

  @action.bound
  private onClickRemoveItem() {
    if (this.props.removeItem) {
      this.props.removeItem(this.props)
    }
  }

  render() {
    const { title, description, price, count } = this.props
    return (
      <div className="flex items-center rounded-xl bg-green-500 m-1 p-2 text-white">
        <div className="w-1/5 text-lg ml-2">{title}</div>
        <div className="w-1/5 font-hairline">{description}</div>
        <div className="w-1/5">{price} ₽ за шт.</div>
        <div className="w-1/5">{price * count} ₽</div>
        <div className="w-1/5 flex justify-between">
          <div className="flex items-center">
            {count} шт.
            <div className="flex flex-col justify-center ml-1">
              <button
                onClick={this.onClickAddCount}
                className="text-black bg-white hover:bg-gray-200 rounded px-1 focus:outline-none flex mb-px py-px"
              >
                {littleArrowUp}
              </button>
              <button
                onClick={this.onClickRemoveCount}
                className="text-black bg-white hover:bg-gray-200 rounded px-1 focus:outline-none flex py-px"
              >
                {littleArrowDown}
              </button>
            </div>
          </div>
          <button
            className="text-white hover:bg-red-700 rounded-full focus:outline-none px-2 py-1"
            onClick={this.onClickRemoveItem}
          >
            {trash}
          </button>
        </div>
      </div>
    )
  }
}
