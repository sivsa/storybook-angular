import { Story, Meta } from '@storybook/angular/types-6-0';
import { OfficeImageComponent } from '../app/office-image/office-image.component';

export default {
  title: 'Example/Image Component',
  component: OfficeImageComponent
} as Meta;

const Template: Story<OfficeImageComponent> = (args: OfficeImageComponent) => ({
  component: OfficeImageComponent,
  props: args,
});

export const NoImageCaption = Template.bind({});
NoImageCaption.args = {
    figAddressTxt: '',
};

export const AtosSyntelChennai = Template.bind({});
AtosSyntelChennai.args = {
    figAddressTxt: 'Plot No. H7 or H8, SIPCOT IT Park, Old Mahabalipuram Road, Navallur Post, Siruseri, Tamil Nadu 603103',
    imgSrc: "assets/syntel_chennai.jpg",
    altTxt: "Atos Syntel Chennai"
};

export const AtosSyntelPune = Template.bind({});
AtosSyntelPune.args = {
    figAddressTxt: 'Plot No. B-1 Software, MIDC, M I D C Technology Park, Talwade, Pune, Maharashtra 411062',
    imgSrc: "assets/syntel_pune.jpg",
    altTxt: "Atos Syntel Pune"
};

export const AtosSyntelTirunelveli = Template.bind({});
AtosSyntelTirunelveli.args = {
    figAddressTxt: 'ELCOT IT Park, Gangaikondan, Tirunelveli',
    imgSrc: "assets/syntel_tirunelveli.jpg",
    altTxt: "Atos Syntel Tirunelveli"
};

export const WithZeroOpacity = Template.bind({});
WithZeroOpacity.args = {
    imgOpacity: 1
};

export const WithHalfOpacity = Template.bind({});
WithHalfOpacity.args = {
    imgOpacity: 0.5
};