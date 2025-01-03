import animate from 'tailwindcss-animate'

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)',
  			navbar: '40px',
  			section: '30px'
  		},
  		fontSize: {
  			header: '54px',
				title: '44px',
				subTitle: "21px"
  		},
  		lineHeight: {
  			header: '64px',
  			title: '54px'
  		},
  		colors: {
			  theme: {
				  background: {
					  secondary: ' #CFD8E34D',
					  footer: '#848EA00D',
					  testimonial: '#E6E8EC33',
					  needs: "#0B1928",
					  card: "#152232"
				  },
				  text: {
					  main: '#0B1928',
					  secondary: '#3E4757',
					  btn: '#004CD3',
					  third: '#848EA0',
					  subTitle: "#0B1928",
					  success: "#1BD1C2",
					  dark: "#848EA0"
				  },	
				  border: {
					  primary: '#848EA080',
					  main: "#848EA033",
					  secondary: '#abcdef',
					  btn: '#848EA033',
					  dark: "#848EA033"
				  },
		  },
  			background: {
  				DEFAULT: 'hsl(var(--background))',
  			},
  			text: {
  				main: '#0B1928',
  			
				},
				border: {
					DEFAULT: 'hsl(var(--border))',
				
				},

  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  		
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [animate],
};
