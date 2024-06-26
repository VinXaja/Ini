import React, {Fragment} from "react";
import CatalogItem from "./CatalogItem";

class Catalog extends React.Component {
    constructor(props) {
        super(props);
        this.items = [
            ['Classical Mythology', 'Mark P. O. Morford', 'Oxford University Press', 2002],
            ['Rules of the Wild', 'Francesca Marciano', 'Random House Inc.', 1998],
            ['Clara Callan', 'Richard Bruce Wright', 'HarperFlamingo Canada', 2001],
            ['Wild Animus', 'Rich Shapero', 'Too Far', 2004],
            ['Tage der Unshuld', 'Richard North Patterson', 'Goldmann', '2000'],
            ['The Hellfire Club', 'Peter Straub', 'Random House Inc.', 1996]
        ];
    }

    render() {
        let allItems = this.items.map((item, i) => {
            return (
                <Fragment key={i}>
                    <div className="col-sm-6 col-lg-4 mb-4 book">
                        <CatalogItem item={item} />
                    </div>
                </Fragment>
            )
        })
        return (
            <div className="container py-3">
                <h2 className="pb-2 mb-4 border-bottom">Our Books</h2>
                <div className="row">
                    {allItems}
                </div>
            </div>
        )
    }
}
export default Catalog;