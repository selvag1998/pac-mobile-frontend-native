import React, { Component,useCallback } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, Animated, Dimensions, Alert } from 'react-native'
import { responsiveHeight, responsiveWidth,useDimensionsChange } from 'react-native-responsive-dimensions'

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height


class Popup extends Component {
	static popupInstance

	static show({ ...config }) {
		this.popupInstance.start(config)
	}

	static hide() {
		this.popupInstance.hidePopup()
	}

	state = {
		positionView: new Animated.Value(HEIGHT),
		opacity: new Animated.Value(0),
		positionPopup: new Animated.Value(HEIGHT),
		popupHeight: 0
	}

	start({ ...config }) {
		this.setState({
			title: config.title,
			type: config.type,
			icon: config.icon !== undefined ? config.icon : false,
			textBody: config.textBody,
			button: config.button !== undefined ? config.button : true,
			button2:config.button2 !==undefined?config.button2:true,
			buttonText: config.buttonText || 'Ok',
			button2Text:config.button2Text || 'Cancel',
			callback: config.callback !== undefined ? config.callback : this.defaultCallback(),
			callback2:config.callback2 !==undefined ? config.callback2 : this.defaultCallback2(),
			background: config.background || 'rgba(0, 0, 0, 0.5)',
			timing: config.timing,
			autoClose: config.autoClose !== undefined ? config.autoClose : false
		})
		

		Animated.sequence([
			Animated.timing(this.state.positionView, {
				toValue: 0,
				duration: 100,
				useNativeDriver: false
			}),
			Animated.timing(this.state.opacity, {
				toValue: 1,
				duration: 300,
				useNativeDriver: false
			}),
			Animated.spring(this.state.positionPopup, {
				toValue: (HEIGHT / 2) - (this.state.popupHeight / 2),
				bounciness: 15,
				useNativeDriver: true
			})
		]).start()

		if (config.autoClose && config.timing !== 0) {
			const duration = config.timing > 0 ? config.timing : 5000
			setTimeout(() => {
				this.hidePopup()
			}, duration)
		}
	}

	hidePopup() {
		Animated.sequence([
			Animated.timing(this.state.positionPopup, {
				toValue: HEIGHT,
				duration: 50,               //150
				useNativeDriver: true
			}),
			Animated.timing(this.state.opacity, {
				toValue: 0,
				duration: 30,        //300
				useNativeDriver: false
			}),
			Animated.timing(this.state.positionView, {
				toValue: HEIGHT,
				duration: 100,             //100
				useNativeDriver: false
			})
		]).start()
	}

	defaultCallback() {
		return Alert.alert(
			'Callback!',
			'Callback complete!',
			[
				{ text: 'Ok', onPress: () => this.hidePopup() }
				
			]
		)
	}
	

	defaultCallback1() {
		
		return Alert.alert(
			'Callback!',
			'Callback complete!',
			[
				{ text: 'Cancel', onPress: () => this.hidePopup() }
				
			]
		)
	}

	handleImage(type) {
		switch (type) {
			case 'Success': return require('../../assets/Success.png')
			case 'Danger': return require('../../assets/Error.png')
			case 'Warning': return require('../../assets/Warning.png')
		}
	}

	render() {
		const { title, type, textBody,button2, button, buttonText,button2Text, callback,callback2, background } = this.state
		let el = null;
		let el1=null;
		if ((this.state.button ===true)&& (this.state.button2===false)) {
			el = <TouchableOpacity style={[styles.Button,{marginTop:20}, styles[type]]} onPress={callback}>
				<Text style={styles.TextButton}>{buttonText}</Text>
			</TouchableOpacity>
		}
		else if((this.state.button===true)&&(this.state.button2===true) )	{
		el = <TouchableOpacity style={[styles.Button,{marginTop:20}, styles[type]]} onPress={callback}>
		<Text style={styles.TextButton}>{buttonText}</Text>
	</TouchableOpacity>
		el1=
			<TouchableOpacity style={[styles.Button,{marginTop:20}, styles[type]]} onPress={callback2}>
			<Text style={styles.TextButton}>{button2Text}</Text>
		</TouchableOpacity>
			
		}
		else {
			el = <Text></Text>
			el1=<Text></Text>
		}
		return (
			<Animated.View
				ref={c => this._root = c}
				style={[styles.Container, {
					backgroundColor: background || 'transparent',
					opacity: this.state.opacity,
					transform: [
						{ translateY: this.state.positionView }
					]
				}]}>
				<Animated.View
					onLayout={event => {
						this.setState({ popupHeight: event.nativeEvent.layout.height })
					}}
					style={[styles.Message, {
						transform: [
							{ translateY: this.state.positionPopup }
						]
					}]}

				>
					<View style={styles.Header} />
					{
						this.state.icon ? (this.state.icon) :
							<Image
								source={this.handleImage(type)}
								resizeMode="contain"
								style={styles.Image}
							/>
					}
					<View style={styles.Content}>
						<Text style={styles.Title}>{title}</Text>
						<Text style={styles.Desc}>{textBody}</Text>
						{el}
						{el1}
					</View>
				</Animated.View>
			</Animated.View>
		)
	}
}

const styles = StyleSheet.create({
	Container: {
		position: 'absolute',
		zIndex: 99999,
		width: WIDTH,
		height: HEIGHT,
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
		alignItems: 'center',
		top: 0,
		left: 0
	},
	Message: {
		maxWidth: 300,
		width: 230,
		minHeight: 300,
		backgroundColor: '#fff',
		borderRadius: 30,
		alignItems: 'center',
		overflow: 'hidden',
		position: 'absolute',
	},
	Content: {
		padding: 20,
		alignItems: 'center'
	},
	Header: {
		height: 230,
		width: 230,
		backgroundColor: '#FBFBFB',
		borderRadius: 100,
		marginTop: -120
	},
	Image: {
		width: 150,
		height: 80,
		position: 'absolute',
		top: 20
	},
	Title: {
		fontWeight: 'bold',
		fontSize: 18,
		color: '#333',
		fontFamily:'SpaceGrotesk-Regular',
	},
	Desc: {
		textAlign: 'center',
		color: '#666',
		marginTop: 10,
		fontFamily:'SpaceGrotesk-Regular'
	},
	Button: {
		borderRadius: 50,
		height: 40,
		width: 130,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 30
	},
	TextButton: {
		color: '#fff',
		fontWeight: 'bold',
		fontFamily:'SpaceGrotesk-Regular'
	},
	Success: {
		backgroundColor: 'green',
		shadowColor: "#AAF577",
		shadowOffset: {
			width: 0,
			height: 5,
		},
		shadowOpacity: 0.36,
		shadowRadius: 6.68,
		elevation: 11
	},
	Danger: {
		backgroundColor: '#F29091',
		shadowColor: "#F29091",
		shadowOffset: {
			width: 0,
			height: 5,
		},
		shadowOpacity: 0.36,
		shadowRadius: 6.68,
		elevation: 11
	},
	Warning: {
		backgroundColor: '#fbd10d',
		shadowColor: "#fbd10d",
		shadowOffset: {
			width: 0,
			height: 5,
		},
		shadowOpacity: 0.36,
		shadowRadius: 6.68,
		elevation: 11
	}
})

export default Popup
