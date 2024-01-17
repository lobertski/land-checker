export interface IProperty {
  property_id: number;
  council: string;
  council_property_number: string | null;
  full_address: string;
  latitude: number;
  lga_code: number;
  longitude: number;
  postcode: string;
}

export interface IMap {
  properties: IProperty[];
  onClickMark: (property: IProperty, open: boolean) => void;
}

export interface IDrawer {
  isOpen: boolean;
  propertyInfo: IProperty | {};
  handleDrawer: (open: boolean) => void;
}
