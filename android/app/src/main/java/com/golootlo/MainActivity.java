package com.golootlo;

import android.os.Bundle;

import com.facebook.react.ReactActivity;
import org.devio.rn.splashscreen.SplashScreen;

public class MainActivity extends ReactActivity {
    protected void onCreate(Bundle savedInstanceState){
        SplashScreen.show(this,true);
        super.onCreate(savedInstanceState);
    }
    @Override
    protected String getMainComponentName() {
        return "golootlo";
    }
}
