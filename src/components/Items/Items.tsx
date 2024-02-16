import type { ItemsProps } from "../../interfaces/Items.props";
import { useState, type FC } from "react";
import Item from "./Item";
import {Card} from "./Card";

const Items: FC<ItemsProps> = ({
  arrayItems
}) => {

  const [selected, setSelected] = useState<number>(0);

  const changeSelect = (index: number) => {
    setSelected(index);
  };

  return (
    <section>
      <div className="flex mb-16 max-lg:flex-col lg:flex-wrap lg:items-center lg:justify-center lg:mx-40">
        {
          arrayItems.map((item, index) => {
            const {
              title,
              message,
              planes
            } = item;

            return (
              <Item
                key={ index }
                onClick={ () => changeSelect(index) }
                selected={ selected === index }
                title={ title }
                message={ message }
                planes={ planes }
              />
            )
          })
        }
      </div>
      <div>
        {
          arrayItems[selected].message &&
          <h5 className="text-center text-gray-600 mb-12 text-[18px]">
            {
              arrayItems[selected].message?.strong &&
              <strong>{ arrayItems[selected].message?.strong } 
             
              </strong> 
            } { arrayItems[selected].message?.text }
            <strong>
            <br />
              { arrayItems[selected].message?.strong2 }
            </strong>
          </h5>
        }
        <div
          className={`flex flex-wrap justify-center items-start ${ arrayItems[selected].ifGrid ? 'grid' : '' } gap-5 mx-20 mt-4 mb-12 max-lg:hidden`}
          style={{
            gridTemplateColumns: `repeat(${ arrayItems[selected].gridCols }, 1fr)`,
            gridTemplateRows: `repeat(${ arrayItems[selected].gridRows }, 1fr)`
          }}
        >
          {
            arrayItems[selected].planes.map((item, index) => {
              const {
                promo,
                price,
                regular,
                plan,
                extraPlan,
                data,
                details,
                src,
                alt,
                width,
                height,
                noHeader,
                tabble
              } = item;

              return (
                <Card
                  key={ index }
                  promo={ promo }
                  price={ price }
                  regular={ regular }
                  plan={ plan }
                  extraPlan={ extraPlan }
                  data={ data }
                  details={ details }
                  src={src}
                  alt={alt}
                  width={width}
                  height={height}
                  noHeader={noHeader}
                  tabble={tabble}
                />
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Items